const fetch = require('node-fetch');

module.exports = {
    command: ['listusr', 'listuser'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium } = context;

        if (!isPremium) return reply('⚠️ Beli Premium User Untuk Bisa Menggunakan Command Khusus Premium');

        // Menentukan halaman untuk pagination
        let page = text || '1';

        try {
            // Mengambil daftar pengguna dari API
            let response = await fetch(`${global.domain}/api/application/users?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta
                }
            });

            let data = await response.json();
            let users = data.data;

            // Jika tidak ada pengguna
            if (!users || users.length === 0) {
                return reply(`❌ Tidak ada pengguna ditemukan pada halaman ${page}.`);
            }

            // Membangun pesan daftar pengguna
            let messageText = `🌐 *Daftar Pengguna Panel:* 🌐\n\n`;
            for (let user of users) {
                let attributes = user.attributes;
                let status = attributes.server_limit === null ? '❌ Tidak Aktif' : '✅ Aktif';

                messageText += `🆔 *ID:* ${attributes.id}\n`;
                messageText += `📌 *Username:* ${attributes.username}\n`;
                messageText += `🗂️ *Nama:* ${attributes.first_name} ${attributes.last_name}\n`;
                messageText += `🔄 *Status:* ${status}\n\n`;
            }

            // Menambahkan informasi pagination
            let pagination = data.meta.pagination;
            messageText += `📄 *Halaman:* ${pagination.current_page}/${pagination.total_pages}\n`;
            messageText += `👥 *Total Pengguna:* ${pagination.total}\n`;

            // Mengirimkan daftar pengguna
            await OjiOffc.sendMessage(m.chat, { text: messageText }, { quoted: m });

            // Jika ada halaman berikutnya
            if (pagination.current_page < pagination.total_pages) {
                reply(`🔍 Gunakan perintah *${prefix}${command} ${parseInt(page) + 1}* untuk melihat halaman selanjutnya.`);
            }
        } catch (error) {
            console.error(error);
            // Jika terjadi kesalahan
            reply('❌ Terjadi kesalahan saat mengambil daftar pengguna. Silakan coba lagi nanti.');
        }
    }
};