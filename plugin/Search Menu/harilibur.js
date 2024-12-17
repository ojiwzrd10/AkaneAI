const axios = require('axios');

module.exports = {
    command: ['harilibur'],
    operate: async (context) => {
        const { m, OjiOffc } = context;
        await OjiOffc.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
        try {
            let response = await axios.get('https://itzpire.com/information/nextLibur');
 
            console.log("API Response:", response.data);

            if (response.data.status === "success" && response.data.data) {
                let liburData = response.data.data;
                let message = `
📅 ${liburData.nextLibur}
🗓️ Daftar Hari Libur Nasional:
                `;

                
                if (liburData.libnas_content && Array.isArray(liburData.libnas_content)) {
                    liburData.libnas_content.forEach(item => {
                        message += `
📌 ${item.summary}
🗓️ ${item.days}, ${item.dateMonth}
                        `;
                    });
                    m?.reply(message);
                } else {
                    m?.reply("Tidak ada data libur nasional yang ditemukan.");
                }
            } else {
                m?.reply("Terjadi kesalahan dalam mengambil data.");
            }
        } catch (error) {
            // Log error untuk debugging
            console.error("Error fetching data:", error);
            m?.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
        }
    }
}