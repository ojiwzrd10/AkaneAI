const fs = require('fs');
const text2png = require('text2png');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const path = require('path');

module.exports = {
    command: ['ttp'],
    operate: async (context) => {
        const { args, m, reply, OjiOffc, mess, prefix, command } = context;

        if (!m.isGroup) return reply(mess.group);
        if (!args[0]) return reply(`• *Example* ${prefix + command} NoaMu Chan`);

        const text = args.join(' ');
        const fontPath = path.join(__dirname, '../../database/lib/coolvetica rg.otf');

        await fs.writeFileSync(
            'out.png',
            text2png(text, {
                font: '100px coolvetica rg',
                localFontPath: fontPath,
                localFontName: 'coolvetica rg',
                color: 'white',
                textAlign: 'left',
                lineSpacing: 10,
                strokeColor: 'black',
                strokeWidth: 2,
                padding: 20,
            })
        );

        const media = fs.readFileSync('out.png');
        const sticker = new Sticker(media, {
            pack: global.author,
            author: global.author,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 70,
            background: '#FFFFFF00',
        });

        const stickerPath = `./${Date.now()}.webp`;
        const stickerFile = await sticker.toFile(stickerPath);
        const stickerBuffer = fs.readFileSync(stickerFile);

        await OjiOffc.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

        fs.unlinkSync(stickerPath);
        fs.unlinkSync('out.png');
    },
};