const axios = require('axios');

module.exports = {
    command: ['mediafire'],
    operate: async (context) => {
        const { args, m, reply, OjiOffc } = context;

        if (!args[0]) return reply(`*⚪ Example :* mediafire linknya`);
        if (!args[0].match(/mediafire/gi)) return reply(`Link tidak valid.`);

        const mediafireLink = args[0];
        
        try {
            const response = await axios.get(`https://api.agatz.xyz/api/mediafire?url=${encodeURIComponent(mediafireLink)}`);
            
            if (response.data.status === 200) {
                const file = response.data.data[0];
                const { link, nama, mime } = file; 
                await OjiOffc.sendMessage(m.chat, {
                    document: { url: link },
                    fileName: nama,
                    mimetype: mime
                }, { quoted: m });

                reply(`✅ File ${nama} berhasil dikirim!`);
            } else {
                reply('⚠️ Terjadi kesalahan dalam mengambil file Mediafire.');
            }
        } catch (error) {
            reply(`⚠️ Terjadi kesalahan saat mengambil file Mediafire: ${error.message}`);
        }
    },
};