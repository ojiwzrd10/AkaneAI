const fetch = require('node-fetch')

module.exports = {
    command: ['subdomain', 'subdomainfinder'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply } = context;

        async function subdomainStalk(domain) {
            let apiUrl = `https://api.agatz.xyz/api/subdomain?url=${encodeURIComponent(domain)}`;
            let res = await fetch(apiUrl);

            if (!res.ok) throw 'Gagal mengambil data dari API';

            let json = await res.json();
            if (json.status !== 200 || !json.data) {
                throw 'Data tidak ditemukan atau ada kesalahan';
            }

            return json.data;
        }

        try {
            if (!text) return reply(`✨ *Cara penggunaan:* ✨\nKetik dengan format: *${prefix + command} oredigital.shop*\n\nPastikan domain yang dimasukkan benar!`);

            let subdomains = await subdomainStalk(text.trim());

            if (subdomains && subdomains.length > 0) {
                let result = `🎯 *Subdomain Finder Result* 🎯\n\n` +
                             `📂 *Subdomains ditemukan untuk:* ${text.trim()}\n` +
                             subdomains.map((sub, index) => `🔹 ${sub}`).join('\n');

                await OjiOffc.sendMessage(m.chat, { text: result }, { quoted: m });
            } else {
                reply('❌ *Tidak ada subdomain ditemukan!* Mungkin domain salah atau tidak ada subdomain yang terdaftar.');
            }
        } catch (e) {
            console.error(e);
            reply('⚠️ *Terjadi kesalahan!* Mohon coba lagi nanti.');
        }
    }
};