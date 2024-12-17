const axios = require('axios');

module.exports = {
    command: ['qc'],
    operate: async (context) => {
        const { args, m, reply, mess, OjiOffc, uselimit, limitnya, prefix, pushname } = context;

        // Cek apakah user memiliki limit
        if (limitnya < 1) return reply(mess.limit);

        // Cek apakah ada input
        if (!args[0]) return reply(`📌Example: ${prefix + 'qc'} ojiganteng`);

        // Membuat objek untuk quote
        const obj = {
            type: 'quote',
            format: 'png',
            backgroundColor: '#ffffff',
            width: 512,
            height: 768,
            scale: 2,
            messages: [
                {
                    entities: [],
                    avatar: true,
                    from: {
                        id: 1,
                        name: pushname,
                        photo: { 
                            url: await OjiOffc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
                        }
                    },
                    text: `${args.join(' ')}`,
                    replyMessage: {},
                },
            ],
        };

        try {
            // Mengirim request ke API untuk membuat quote
            let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Membuat gambar dari data yang didapat
            let buffer = Buffer.from(response.data.result.image, 'base64');

            // Mengirim gambar sebagai stiker
            await OjiOffc.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });

            // Mengurangi limit pengguna
            uselimit();
        } catch (error) {
            console.error('Error generating quote:', error);
            reply('Terjadi kesalahan saat membuat quote.');
        }
    },
};