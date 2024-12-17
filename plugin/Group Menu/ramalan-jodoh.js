const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();

module.exports = {
    command: ['ramalanjodoh', 'ramaljodoh'],
    operate: async (context) => {
        const { OjiOffc, prefix, command, m, text, reply } = context;

        if (!m.isGroup) return reply('⚠️ *Perintah ini hanya bisa digunakan di grup*');
        if (!text) return reply(`🐣 *Contoh : ${prefix + command} Oji, 7, 7, 2005, Tobrut, 16, 11, 2004`);

        let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split(',');

        try {
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2);
            if (anu.status === false) return reply(anu.message);

            OjiOffc.sendText(m.chat, `🔖 *Nama Anda :* ${anu.message.nama_anda.nama}\n🗓️ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n🔖 *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n🗓️ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n📃 *Hasil :* ${anu.message.result}`, m);
        } catch (error) {
            reply('⚠️ *Terjadi kesalahan saat mengambil data*');
        }
    }
};