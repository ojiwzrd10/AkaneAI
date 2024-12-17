const fetch = require('node-fetch');

module.exports = {
    command: ['animeindo-search', 'animeindo'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function fetchAnimeindoData(query) {
            const apiUrl = `https://api.agatz.xyz/api/animeindo?message=${encodeURIComponent(query)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();

            // Validasi response berdasarkan format yang diberikan
            if (json.status !== 200 || !json.data || json.data.status !== 'success' || !json.data.data || json.data.data.length === 0) {
                throw 'Anime tidak ditemukan';
            }

            return json.data.data[0];  // Mengambil data anime pertama
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} naruto*\n\nMasukkan judul anime yang ingin dicari!`);

            const animeData = await fetchAnimeindoData(text.trim());

            if (!animeData || !animeData.title) {
                throw 'Data anime tidak lengkap atau tidak tersedia.';
            }

            let result = `🔍 *Hasil Pencarian Anime:* ${text}\n\n`;
            result += `*Judul:* ${animeData.title}\n` +
                      `*Link:* ${animeData.link || 'Tidak tersedia'}\n` +
                      `*Tipe:* ${animeData.type || 'Tidak tersedia'}\n` +
                      `*Rilis:* ${animeData.release || 'Tidak tersedia'}\n` +
                      `*Durasi:* ${animeData.duration || 'Tidak tersedia'}\n\n` +
                      `*Sinopsis:* ${animeData.synopsis || 'Sinopsis tidak tersedia'}`;

            await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};