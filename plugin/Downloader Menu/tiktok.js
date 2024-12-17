const { tiktok } = require('../../database/lib/scraper.js')

module.exports = {
    command: ['tiktok', 'tt'],
    operate: async (context) => {
        const { m, reply, args, prefix, command, OjiOffc } = context;

        
        if (args.length == 0) return reply(`Example: ${prefix + command} link lu`);

        try {
            let res = await tiktok(`${args[0]}`);
            await OjiOffc.sendMessage(m.chat, {
                video: { url: res.nowm },
                caption: res.title,
                fileName: `tiktok.mp4`,
                mimetype: 'video/mp4'
            });

            await OjiOffc.sendMessage(m.chat, {
                audio: { url: res.audio },
                fileName: `tiktok.mp3`,
                mimetype: 'audio/mp4'
            });

            
        } catch (error) {
            console.error(error);
            reply('⚠️ Terjadi kesalahan saat mengambil data dari TikTok.');
        }
    }
};