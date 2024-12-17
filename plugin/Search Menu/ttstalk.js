const fetch = require('node-fetch')

module.exports = {
    command: ['ttstalk', 'tiktokstalk'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function ttstalk(username) {
            let apiUrl = `https://api.agatz.xyz/api/ttstalk?name=${encodeURIComponent(username)}`;
            let res = await fetch(apiUrl);
            
            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();
            if (json.status !== 200 || !json.data) {
                throw 'Data tidak ditemukan atau ada kesalahan';
            }

            return json.data;
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} msbrewc*\n\nPastikan username TikTok kamu benar ya!`);

            let data = await ttstalk(text.trim());

            if (data) {
                let { photo, username, name, bio, followers, following, likes, posts } = data;

                let result = `🎯 *TikTok Stalking Result* 🎯\n\n` +
                             `🆔 *Username*: ${username}\n` +
                             `👤 *Nama*: ${name}\n` +
                             `📜 *Bio*: ${bio || '-'}\n` +
                             `👥 *Followers*: ${followers}\n` +
                             `🔄 *Following*: ${following}\n` +
                             `❤️ *Likes*: ${likes}\n` +
                             `📹 *Posts*: ${posts}\n` +
                             `📸 *Foto Profil*: ${photo}`;

                await OjiOffc.sendMessage(m.chat, {
                    image: { url: photo },
                    caption: result
                }, { quoted: m });
            } else {
                reply('❌ *Username tidak ditemukan!* Mungkin username salah, coba periksa kembali.');
            }
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};