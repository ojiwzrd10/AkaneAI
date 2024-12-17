const fetch = require('node-fetch')

module.exports = {
    command: ['resep', 'cariresep'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function searchRecipe(query) {
            let apiUrl = `https://api.agatz.xyz/api/resep?message=${encodeURIComponent(query)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();
            if (json.status !== 200 || !json.data || !json.data.data) {
                throw 'Resep tidak ditemukan atau ada kesalahan';
            }

            return json.data.data;
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} ikan goreng*\n\nPastikan kata kunci resep yang dimasukkan benar!`);

            let recipes = await searchRecipe(text.trim());

            if (recipes && recipes.length > 0) {
                let result = `🎯 *Hasil Pencarian Resep* 🎯\n\n` +
                             `🍴 *Resep ditemukan untuk:* ${text.trim()}\n\n` +
                             recipes.map((recipe, index) => `🔹 *${recipe.judul}* - [Lihat Resep](${recipe.link})`).join('\n');

                await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });
            } else {
                reply('❌ *Resep tidak ditemukan!* Mungkin kata kunci salah atau resep tidak tersedia.');
            }
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};