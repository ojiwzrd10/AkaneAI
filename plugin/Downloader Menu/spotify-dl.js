const fetch = require('node-fetch');

module.exports = {
    command: ['spotify'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply, isPremium, prefix, command } = context;

        if (!isPremium && db.data.users[m.sender].limit < 1) {
            return reply(mess.endLimit);
        }

        db.data.users[m.sender].limit -= 3;
        reply(`🎀 Limit Kamu Berkurang 3`);

        if (!text) {
            return reply(`🎀 *Contoh: ${prefix + command} https://open.spotify.com/track/2Tp8vm7MZIb1nnx1qEGYv5`);
        }

        try {
            await OjiOffc.sendMessage(m.chat, { react: { text: "🌀", key: m.key }});
            let apiUrl = `https://api.agatz.xyz/api/spotifydl?url=${encodeURIComponent(text)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();

            if (json.status !== 200) throw 'Gagal mengambil data dari API';

            let data = JSON.parse(json.data);
            if (!data) throw 'Data tidak ditemukan.';

            if (!data.url_audio_v1) throw 'Link audio tidak ditemukan.';

            let caption = `*Judul:* ${data.judul || 'Tidak ada judul'}\n` +
                          `*Channel:* ${data.nama_channel || 'Tidak ada channel'}\n` +
                          `*Durasi:* ${data.durasi || 'Tidak ada durasi'} detik\n` +
                          `*Link Audio:* [Unduh MP3](${data.url_audio_v1})`;

            await OjiOffc.sendMessage(m.chat, {
              audio: { url: data.url_audio_v1 },
              caption: caption,
              mimetype: 'audio/mpeg'
            }, { quoted: m });

        } catch (e) {
            console.error(e);
            reply("⚠️ Terjadi kesalahan: " + e.message || 'Kesalahan tidak terduga');
        }
    }
};