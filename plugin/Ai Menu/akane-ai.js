const axios = require('axios');

module.exports = {
    command: ['akane-ai'],
    operate: async (context) => {
        const { text, m, OjiOffc, prefix, command } = context;

        if (!text) return m.reply(`Contoh: ${prefix + command} siapa namamu`);

        try {
            const response = await axios.get(`https://api.agatz.xyz/api/gptlogic?logic=Nama%20Kamu%20Adalah%20Akane%20Ai,%20Kamu%20Hanyalah%20Assistent%20Virtual%20Jangan%20Berikan%20Informasi%20pribadimu%20sedikitpun,%20setiap%20akhir%20pesan%20harus%20disertai%20dengan%20emoji&p=${encodeURIComponent(text)}`);

            if (response.data.status === 200) {
                const result = response.data.data.result;

                await OjiOffc.sendMessage(m.chat, {
                    text: result
                }, { quoted: m });

                await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});
            } else {
                return m.reply('⚠️ Terjadi kesalahan saat memproses permintaan.');
            }
        } catch (error) {
            return m.reply('⚠️ Terjadi kesalahan dalam menghubungi API.');
        }
    }
};