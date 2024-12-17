const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();

module.exports = {
    command: ['artinama'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply } = context;

        if (!m.isGroup) return reply('⚠️ *Perintah ini hanya bisa digunakan di grup*');
        if (!text) return reply(`🐣 *Contoh : ${prefix + command} ojiwzrd`);

        try {
            let anu = await primbon.arti_nama(text);
            if (anu.status === false) return reply(anu.message);

            OjiOffc.sendText(m.chat, `🔖 *Nama :* ${anu.message.nama}\n🎨 *Arti :* ${anu.message.arti}`, m);
        } catch (error) {
            reply('⚠️ *Terjadi kesalahan saat mengambil data*');
        }
    }
};