const fetch = require('node-fetch'); 

module.exports = {
    command: ['baca-resep', 'resep'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function fetchRecipeDetail(url) {
            let apiUrl = `https://api.agatz.xyz/api/resepd?url=${encodeURIComponent(url)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();
            if (json.status !== 200 || !json.data) {
                throw 'Resep tidak ditemukan atau ada kesalahan';
            }

            return json.data;
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} https://resepkoki.id/resep/resep-ikan-bawal-bakar/*\n\nMasukkan URL resep yang ingin dibaca!`);

            let recipeDetail = await fetchRecipeDetail(text.trim());

            if (recipeDetail) {
                let result = `🎯 *Resep: ${recipeDetail.judul}* 🎯\n\n` +
                             `🕒 *Waktu Masak:* ${recipeDetail.waktu_masak}\n` +
                             `🍽️ *Hasil:* ${recipeDetail.hasil}\n` +
                             `⚙️ *Tingkat Kesulitan:* ${recipeDetail.tingkat_kesulitan}\n\n` +
                             `📜 *Bahan-bahan:* \n${recipeDetail.bahan}\n\n` +
                             `🍳 *Langkah-langkah:* \n${recipeDetail.langkah_langkah}\n\n` +
                             `🔗 *Sumber:* [Lihat Resep](https://resepkoki.id/resep/resep-ikan-bawal-bakar/)\n\n` +
                             `📷 *Gambar:* \n${recipeDetail.thumb}`;

                await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });

                // Mengirim gambar resep
                await OjiOffc.sendMessage(m.chat, { image: { url: recipeDetail.thumb }, caption: `Gambar resep: ${recipeDetail.judul}` }, { quoted: m });
            }
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};