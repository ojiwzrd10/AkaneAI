const fetch = require('node-fetch');

module.exports = {
    command: ['cuaca'],
    operate: async (context) => {
        const { OjiOffc, m, text, reply, isPremium } = context;

        if (!isPremium && global.db.data.users[m.sender].limit < 1) 
            return reply(mess.endLimit);

        db.data.users[m.sender].limit -= 1;
        reply(`🎀 Limit Kamu Berkurang 1`);

        if (!text) 
            return m.reply(`*Mau Nyari Cuaca Daerah Mana?*\nContoh: .cuaca jakarta`);

        try {
            const response = await fetch(`https://api.agatz.xyz/api/cuaca?message=${encodeURIComponent(text)}`);
            const data = await response.json();

            if (data.status === 200) {
                const location = data.data.location;
                const current = data.data.current;

                const weatherIcon = `https:${current.condition.icon}`;

                const ojiic_result = `
🗺️ *Nama Kota :* ${location.name}
🌍 *Region :* ${location.region || 'N/A'}
🇮🇩 *Negara :* ${location.country}
🌡️ *Suhu (Celsius):* ${current.temp_c}°C
🌡️ *Suhu (Fahrenheit):* ${current.temp_f}°F
🌥️ *Cuaca :* ${current.condition.text}
💨 *Kecepatan Angin:* ${current.wind_kph} kph
💧 *Kelembapan :* ${current.humidity}%
🕒 *Terakhir Diperbarui :* ${current.last_updated}
📍 *Latitude :* ${location.lat}
📍 *Longitude :* ${location.lon}
⏰ *Waktu Lokal :* ${location.localtime}`;

                OjiOffc.sendMessage(m.chat, { 
                    image: { url: weatherIcon }, 
                    caption: ojiic_result 
                }, { quoted: m });
            } else {
                reply('⚠️ *Terjadi kesalahan saat mengambil data cuaca*');
            }
        } catch (e) {
            console.error(e);
            reply('😿 *Kayanya Ada Yang Erorr Nih*');
        }
    }
};