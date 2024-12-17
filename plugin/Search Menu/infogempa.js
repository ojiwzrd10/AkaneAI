const axios = require('axios');

module.exports = {
    command: ['infogempa'],
    operate: async (context) => {
        const { m, reply } = context;

        try {
            const response = await axios.get('https://api.agatz.xyz/api/gempa');
            const info = response.data;

            const waktu = info.data.waktu;
            const tanggal = info.data.tanggal;
            const magnitude = info.data.magnitude;
            const kedalaman = info.data.kedalaman;
            const koordinat = info.data.koordinat;
            const lokasi = info.data.wilayah;
            const potensi = info.data.potensi;

            const ojiig_result = `
⏰ *Waktu :* ${tanggal} & ${waktu}
🧭 *Magnitude :* ${magnitude}
🚧 *Kedalaman :* ${kedalaman}
🔍 *Koordinat :* ${koordinat}
🗺️ *Lokasi :* ${lokasi}
☢️ *Potensi :* ${potensi}`;

            reply(ojiig_result);
        } catch (e) {
            console.error(e);
            reply('😿 *Terjadi kesalahan saat mengambil data gempa*');
        }
    }
};