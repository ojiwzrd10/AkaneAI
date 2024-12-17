const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();

module.exports = {
    command: ['sifat', 'ceksifat'],
    operate: async (context) => {
        const { OjiOffc, prefix, command, m, text, reply } = context;

        if (!m.isGroup) return reply('⚠️ *Perintah ini hanya bisa digunakan di grup*');
        if (!text) return reply(`🐣 *Contoh : ${prefix + command} Dika, 7, 7, 2005`);

        let [nama, tgl, bln, thn] = text.split(',');

        try {
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn);
            if (anu.status === false) return reply(anu.message);

            OjiOffc.sendText(m.chat, `🔖 *Nama :* ${anu.message.nama}\n🗓️ *Lahir :* ${anu.message.tgl_lahir}\n📏 *Garis Hidup :* ${anu.message.garis_hidup}`, m);
        } catch (error) {
            reply('⚠️ *Terjadi kesalahan saat mengambil data*');
        }
    }
};