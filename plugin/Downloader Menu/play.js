const fetch = require('node-fetch');

module.exports = {
    command: ['play'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply, isPremium, } = context;

        if (!isPremium && db.data.users[m.sender].limit < 1) {
            return reply(mess.endLimit);
        }

        db.data.users[m.sender].limit -= 3;
        reply(`🎀 Limit Kamu Berkurang 3`);

        if (!text) {
            return reply(`🎀 *Contoh: ${prefix + command} The Panturas*`);
        }

        try {
            const response = await fetch(`https://api.agatz.xyz/api/ytplayvid?message=${encodeURIComponent(text)}`);

            if (!response.ok) {
                throw new Error(`Gagal menghubungi API. Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.status !== 200 || !data.data) {
                throw new Error(`Terjadi kesalahan saat mengambil data. Pesan: ${data.message}`);
            }

            const { title, description, url, duration, views, uploadedAt, author, downloadUrl } = data.data;

            const captions = `🎬 *Hasil Pencarian Video YouTube* 🎬\n\n` +
                             `📌 *Judul*: ${title}\n` +
                             `🖋️ *Channel*: ${author}\n` +
                             `⏳ *Durasi*: ${duration}\n` +
                             `👁️ *Ditonton*: ${views} kali\n` +
                             `📅 *Diunggah*: ${uploadedAt}\n` +
                             `🔗 *Tonton di YouTube*: ${url}\n\n` +
                             `⬇️ *Link Unduhan*: [Download Video](${downloadUrl})\n\n` +
                             `_Video Akan Sedang Di Unduh Mohon Di Tunggu_`;

            await OjiOffc.sendMessage(m.chat, {
                text: captions,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: `Video dari ${author}`,
                        thumbnailUrl: "https://i.ytimg.com/vi/HR3rRParxoY/hqdefault.jpg",
                        mediaUrl: url,
                        mediaType: 1
                    }
                }
            }, { quoted: m });

            await OjiOffc.sendMessage(m.chat, {
                video: { url: downloadUrl },
                caption: "bilang apa?"
            }, { quoted: m });

        } catch (e) {
            console.error(e); 
            reply(`⚠️ *Terjadi kesalahan:* ${e.message}`);
        }
    }
};