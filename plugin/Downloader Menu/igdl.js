const { ndown } = require('nayan-media-downloader');

module.exports = {
    command: ['instagram', 'igdl'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply, isPremium } = context;

        if (!isPremium && db.data.users[m.sender].limit < 1) {
            return reply(mess.endLimit);
        }

        db.data.users[m.sender].limit -= 3;
        reply(`🎀 Limit Kamu Berkurang 3`);

        if (!text || !text.startsWith('https')) {
            return reply(`🎀 *Contoh: ${prefix + command} https://www.instagram.com/p/CKXZ1Z1JZK/*`);
        }

        try {
            await OjiOffc.sendMessage(m.chat, { react: { text: "🌀", key: m.key }});
            const res = await ndown(text);
            const result = res.data;

            for (let i of result) {
                if (i.url.startsWith('https://d.rapidcdn.app')) {
                    let url = i.url;
                    await OjiOffc.sendMessage(m.chat, { video: { url } }, { quoted: m });
                } else if (i.url.startsWith('https://scontent.cdninstagram.com')) {
                    let url = i.url;
                    await OjiOffc.sendMessage(m.chat, { image: { url } }, { quoted: m });
                    await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});
                }
            }
        } catch (err) {
            console.error(err);
            reply("⚠️ Terjadi kesalahan saat mengambil data.");
        }
    }
};