const fetch = require('node-fetch');

module.exports = {
    command: ['detail-animeindo', 'animeindo-detail'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function fetchAnimeindoDetail(url) {
            const apiUrl = `https://api.agatz.xyz/api/animeindod?url=${encodeURIComponent(url)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();

            // Validasi response berdasarkan format yang diberikan
            if (json.status !== 200 || !json.data || json.data.status !== 'success') {
                throw 'Data tidak ditemukan';
            }

            return json.data.animeData;  // Mengambil data anime
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} URL-anime*\n\nMasukkan URL anime yang ingin dicari!`);

            const animeData = await fetchAnimeindoDetail(text.trim());

            if (!animeData || !animeData.title) {
                throw 'Data anime tidak lengkap atau tidak tersedia.';
            }

            let result = `🔍 *Detail Anime:* ${animeData.title}\n\n`;
            result += `*Judul:* ${animeData.title}\n` +
                      `*Poster:* ![Image](${animeData.poster})\n` +
                      `*Sinopsis:* ${animeData.synopsis || 'Sinopsis tidak tersedia'}\n` +
                      `*Genre:* ${animeData.genres.join(', ') || 'Tidak tersedia'}\n` +
                      `*Episode:* ${animeData.episodes.map(e => `- ${e.eps_title}: [Tonton](${e.eps_url})`).join('\n') || 'Tidak tersedia'}`;

            await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};