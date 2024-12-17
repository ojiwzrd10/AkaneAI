const fetch = require('node-fetch');

module.exports = {
    command: ['kodepos'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function fetchKodePosData(query) {
            const apiUrl = `https://api.agatz.xyz/api/kodepos?message=${encodeURIComponent(query)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();
            if (json.status !== 200 || !json.data || json.data.length === 0) {
                throw 'Data kode pos tidak ditemukan';
            }

            return json.data;
        }

        try {
            if (!text) return reply(`⚪ *Example :* *${prefix + command} bulakamba*`);

            const kodePosData = await fetchKodePosData(text.trim());

            let result = `🔍 *Hasil Pencarian Kode Pos:* ${text}\n\n`;

            kodePosData.forEach((item, index) => {
                result += `\n${index + 1}. *Kelurahan:* ${item.kelurahan}\n` +
                          `   *Kecamatan:* ${item.kecamatan}\n` +
                          `   *Kota:* ${item.kota}\n` +
                          `   *Provinsi:* ${item.provinsi}\n` +
                          `   *Kode Pos:* ${item.kode_pos}\n` +
                          `   *Kode Kemendagri:* ${item.kode_kemendagri}\n` +
                          `   *Lintang:* ${item.lintang}\n` +
                          `   *Bujur:* ${item.bujur}\n` +
                          `   *Elevasi:* ${item.elevasi}m\n`;
            });

            await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};