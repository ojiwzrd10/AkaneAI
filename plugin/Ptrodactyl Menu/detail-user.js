const fetch = require('node-fetch');

module.exports = {
    command: ['detailuser'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium } = context;

        if (!isPremium) return reply('⚠️ Akses ditolak. Anda tidak memiliki izin untuk menggunakan perintah ini.');

        // Mengambil ID pengguna dari argumen
        let userId = text.trim();

        // Memastikan ID pengguna telah diberikan
        if (!userId) {
            return reply('❌ Silakan berikan ID pengguna yang ingin dilihat.\n\nContoh: *' + prefix + command + ' <ID_User>*');
        }

        try {
            // Mengambil detail pengguna dari API
            let response = await fetch(`${global.domain}/api/application/users/${userId}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta
                }
            });

            let data = await response.json();

            // Memeriksa jika pengguna tidak ditemukan atau terjadi kesalahan
            if (data.errors) {
                return reply('❌ *USER TIDAK DITEMUKAN*');
            }

            // Mengambil atribut pengguna dari respons
            let user = data.attributes;

            // Menyusun pesan detail pengguna
            let messageText = `✨ *DETAIL PENGGUNA: ${user.username.toUpperCase()}* ✨\n\n`;
            messageText += `🆔 *ID*: ${user.id}\n`;
            messageText += `🔑 *UUID*: ${user.uuid}\n`;
            messageText += `👤 *Username*: ${user.username}\n`;
            messageText += `✉️ *Email*: ${user.email}\n`;
            messageText += `📛 *Nama*: ${user.first_name} ${user.last_name}\n`;
            messageText += `🌐 *Bahasa*: ${user.language}\n`;
            messageText += `👮 *Admin*: ${user.root_admin ? '✅ Ya' : '❌ Tidak'}\n`;
            messageText += `🕒 *Dibuat Pada*: ${user.created_at}\n`;

            // Mengirimkan pesan ke pengguna
            await OjiOffc.sendMessage(m.chat, { text: messageText }, { quoted: m });
        } catch (error) {
            console.error(error);
            // Mengirim pesan jika terjadi kesalahan saat mengambil detail pengguna
            reply('❌ Terjadi kesalahan saat mengambil detail pengguna. Silakan coba lagi nanti.');
        }
    }
};