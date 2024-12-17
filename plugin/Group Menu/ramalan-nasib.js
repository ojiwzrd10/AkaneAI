const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();

module.exports = {
    command: ['ramalannasib', 'ramalnasib', 'nasib'],
    operate: async (context) => {
        const { OjiOffc, prefix, command, m, text, reply } = context;

        if (!m.isGroup) return reply('⚠️ *Perintah ini hanya bisa digunakan di grup*');
        if (!text) return reply(`🐣 *Contoh : ${prefix + command} 7, 7, 2005`);

        let [tgl, bln, thn] = text.split(',');

        try {
            let anu = await primbon.ramalan_nasib(tgl, bln, thn);
            if (anu.status === false) return reply(anu.message);

            OjiOffc.sendText(m.chat, `📃 *Analisa :* ${anu.message.analisa}\n🔢 *Angka Akar :* ${anu.message.angka_akar}\n🧸 *Sifat :* ${anu.message.sifat}\n📑 *Elemen :* ${anu.message.elemen}\n🗽 *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m);
        } catch (error) {
            reply('⚠️ *Terjadi kesalahan saat mengambil data*');
        }
    }
};