const axios = require('axios');

module.exports = {
    command: ['nahida'], 
    operate: async (context) => {
        const { text, m, OjiOffc, prefix, command } = context;

        if (!text) return m.reply(`Contoh: ${prefix + command} Masukan Text Nya Dong!.`);

        try {
            
            const response = await axios.get(`https://api.agatz.xyz/api/voiceover?text=${encodeURIComponent(text)}&model=nahida`);

            if (response.data.status === 200) {
                
                const audioUrl = response.data.data.oss_url;

               
                await OjiOffc.sendMessage(m.chat, {
                    audio: { url: audioUrl },
                    mimetype: 'audio/mpeg',
                    ptt: true 
                }, { quoted: m });

                
                await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});
            } else {
                return m.reply('⚠️ Terjadi kesalahan saat mengonversi teks menjadi suara.');
            }
        } catch (error) {
            
            return m.reply('⚠️ Terjadi kesalahan dalam menghubungi API.');
        }
    }
};