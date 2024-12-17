const fetch = require('node-fetch');

module.exports = {
    command: ['lirik', 'liriklagu'],
    operate: async (context) => {
        const { text, reply, m, OjiOffc } = context;
        
        if (!text) return reply(`*Judulnya Mana?*`);
        if (text.length > 30) return reply(`*Panjang Amat*`);
        
        reply('⏳ Sedang Mencari...'); 
        
        try {
            const response = await fetch(`https://api.agatz.xyz/api/lirik?message=${text}`);
            const lirikResponse = await response.json();

            if (!lirikResponse.data.status) return reply('*Lirik Lagu Tidak Ditemukan*');
            
            const { title, album, thumb, lyrics } = lirikResponse.data;
            
            await OjiOffc.sendMessage(m.chat, {
                image: { url: thumb },
                caption: `📚 *Lirik Lagu*\n🎀 *Judul* : ${title}\n🔖 *Album* : ${album}\n\n📖 *Lirik* :\n${lyrics}`
            }, { quoted: m });

        } catch (error) {
            reply(`*Terjadi Kesalahan, Coba Lagi*`);
        }
    }
};