const axios = require('axios');

module.exports = {
    command: ['ttsearch', 'tiktoksearch', 'tiktoks'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply, isPremium, prefix, command } = context;

        if (!isPremium && db.data.users[m.sender].limit < 1) {
            return reply(mess.endLimit);
        }

        db.data.users[m.sender].limit -= 3;
        reply(`🎀 Limit Kamu Berkurang 3`);

        if (!text) {
            return reply(`🎀 *Contoh: ${prefix + command} yang lagi viral*`);
        }

        try {
            await OjiOffc.sendMessage(m.chat, { react: { text: "🌀", key: m.key }});
            const { title, no_watermark } = await tiktoks(text);

            const caption = `🎬 *Video TikTok* 🎬\n\n` +
                            `📌 *Judul*: ${title}\n` +
                            `🔗 *Link Video*: ${no_watermark}\n\n` +
                            `*Video akan segera dikirim...*`;

            await OjiOffc.sendMessage(m.chat, { text: caption }, { quoted: m });
            await OjiOffc.sendMessage(m.chat, { video: { url: no_watermark }, caption: "Bilang apa sama aku?" }, { quoted: m });
            await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});

            db.data.users[m.sender].isWaitingForNextVideo = true;

        } catch (e) {
            console.error(e); 
            reply("⚠️ *Terjadi kesalahan:* " + e.message);
        }
    },

    listenForNextVideo: async (context) => {
        const { OjiOffc, m, text, reply } = context;

        if (text.toLowerCase() === "lanjut" && db.data.users[m.sender].isWaitingForNextVideo) {
            try {
                const { title, no_watermark } = await tiktoks();

                const caption = `🎬 *Video TikTok Baru* 🎬\n\n` +
                                `📌 *Judul*: ${title}\n` +
                                `🔗 *Link Video*: ${no_watermark}\n\n` +
                                `*Video akan segera dikirim...*`;

                await OjiOffc.sendMessage(m.chat, { text: caption }, { quoted: m });
                await OjiOffc.sendMessage(m.chat, { video: { url: no_watermark }, caption: "Berikut video TikTok lainnya!" }, { quoted: m });

                db.data.users[m.sender].isWaitingForNextVideo = false;
            } catch (e) {
                console.error(e);
                reply("⚠️ *Terjadi kesalahan:* " + e.message);
            }
        }
    }
};

async function tiktoks(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://tikwm.com/api/feed/search',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Cookie': 'current_language=en',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
                },
                data: new URLSearchParams({
                    keywords: query || '',
                    count: 10,
                    cursor: 0,
                    HD: 1
                })
            });

            const videos = response.data.data.videos;
            if (videos.length === 0) {
                reject("Tidak ada video ditemukan.");
            } else {
                const gywee = Math.floor(Math.random() * videos.length);
                const videorndm = videos[gywee];

                const result = {
                    title: videorndm.title,
                    cover: videorndm.cover,
                    origin_cover: videorndm.origin_cover,
                    no_watermark: videorndm.play,
                    watermark: videorndm.wmplay,
                    music: videorndm.music
                };
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    });
}