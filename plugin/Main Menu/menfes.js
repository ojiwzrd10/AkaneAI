module.exports = {
    command: ['confes', 'confess', 'menfes', 'menfess'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply } = context;

        if (!text) return reply(`🐣 *Contoh : Menfes 62xxxx|Private|Haii*`);

        let nomor = text.split('|')[0] ? text.split('|')[0] : text;
        let oji_nama = text.split('|')[1] ? text.split('|')[1] : text;
        let ojichat = text.split('|')[2] ? text.split('|')[2] : '';

        if (ojichat.length < 1) return reply(`🦖 *Maaf Cara Penggunaan Salah*`);

        let oji_txt = `*Haiii Kamu Dapet Menfes*\n👤 *Pengirim : ${oji_nama}* \n💌 *Pesan :* ${ojichat}\n🐣 *Pesan Menfes Ini Dikirim Oleh OJIBOTZz*`;

        OjiOffc.sendMessage(`${nomor}@s.whatsapp.net`, { 
            caption: oji_txt, 
            image: { url: `https://telegra.ph/file/59ae61b1c8937d4558d94.jpg` }
        });

        reply(`*Pesan Menfes Sudah Terkirim*`);
    }
};