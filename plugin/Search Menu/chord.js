const axios = require('axios');

module.exports = {
    command: ['chord'],
    operate: async (context) => {
        const { text, reply } = context;

        if (!text) return reply(`🍏 *Tolong Masukkan judul Lagu*`);
        reply("⏳ Mohon Tunggu...");

        try {
            const response = await axios.get(`https://api.ryzendesu.vip/api/search/chord?query=${text}`);

            if (response.data && response.data.title && response.data.chord) {
                const judul = response.data.title;
                const chordlagu = response.data.chord;
                let Oji_Result = `🎸 *Chord Guitar*\n📋 *Judul : ${judul}*\n📑 *Chord Lagu :*\n${chordlagu}`;
                reply(Oji_Result);
            } else {
                reply(`⚠️ *Nama Lagu Tidak Ditemukan*`);
            }
        } catch (error) {
            console.error("Error fetching chord data:", error);
            reply(`⚠️ *Terjadi kesalahan dalam pengambilan data*`);
        }
    }
};