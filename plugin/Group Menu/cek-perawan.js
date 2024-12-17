const fs = require('fs');
const gtts = require('node-gtts');

module.exports = {
    command: ['cekperawan'],
    operate: async (context) => {
        const { args, m, reply, OjiOffc, mess } = context;

        if (!m.isGroup) return reply(mess.group);

        const defaultLang = 'id';

        // Penanganan input nama
        let ojiperawan;
        if (args.length === 0 || !args[0]) {
            return reply('Harap masukkan nama kamu.');
        } else {
            ojiperawan = args[0];
        }

        // Penanganan bahasa
        let lang = args[1];
        if (!lang || lang.length !== 2) {
            lang = defaultLang;
        }

        // Daftar hasil random
        const perawan = [
            "udah jadi janda",
            "sudah bolong",
            "Masih Perawan",
            "Sudah Tidak Perawan"
        ];

        const randomperawan = perawan[Math.floor(Math.random() * perawan.length)];
        let text = `${ojiperawan} ${randomperawan}`;

        // Fungsi untuk text-to-speech
        function tts(text, lang = 'id') {
            return new Promise((resolve, reject) => {
                try {
                    let tts = gtts(lang);
                    let filePath = (1 * new Date()) + '.mp3';
                    tts.save(filePath, text, () => {
                        resolve(fs.readFileSync(filePath));
                        fs.unlinkSync(filePath);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        let res;
        try {
            res = await tts(text, lang);
        } catch (e) {
            reply(e + '');
            res = await tts(text, defaultLang);
        } finally {
            reply(text);
            if (res) {
                await OjiOffc.sendMessage(
                    m.chat,
                    { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] },
                    { quoted: m }
                );
            }
        }
    }
};