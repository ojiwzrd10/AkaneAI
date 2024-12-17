const axios = require('axios');

module.exports = {
    command: ['txt2img'],
    operate: async (context) => {
        const { text, m, OjiOffc, prefix, command } = context;

        if (!text) return m.reply(`Contoh: ${prefix + command} kucing`);
        

        async function photoleap(prompt) {
            try {
                let result = [];
                for (let i = 0; i < 1; i++) {
                    let { data } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
                    result.push(data.result_url);
                }
                return result;
            } catch (e) {
                return { msg: 404 };
            }
        }

        let tahu = await photoleap(text);
        if (tahu.msg === 404) {
            return m.reply('⚠️ Terjadi kesalahan dalam menghasilkan gambar.');
        }

        for (const x of tahu) {
            OjiOffc.sendMessage(m.chat, { image: { url: x }, caption: `Bilang Apa Sama Aku?` }, { quoted: m });
            
            await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});
        }
    }
};