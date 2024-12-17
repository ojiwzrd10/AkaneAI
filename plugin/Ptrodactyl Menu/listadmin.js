const fetch = require('node-fetch');

module.exports = {
    command: ['listadmin', 'listadminpanel'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium } = context;

        if (!isPremium) return reply('⚠️ Akses ditolak. Anda tidak memiliki izin untuk menggunakan perintah ini.');

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

            // Memeriksa apakah ada pengguna
            if (!users || users.length === 0) {
                return reply(`❌ Tidak ada admin ditemukan pada halaman ${page}.`);
            }

            // Membangun pesan daftar admin
            let messageText = `👮‍♂️ *DAFTAR ADMIN* 👮‍♂️\n\n`;
            let adminCount = 0;

            for (let user of users) {
                let attributes = user.attributes;

                // Memeriksa apakah pengguna adalah admin
                if (attributes.root_admin) {
                    adminCount++;
                    let status = attributes.server_limit === null ? '❌ Tidak Aktif' : '✅ Aktif';

                    messageText += `🌟 *ID*: ${attributes.id}\n`;
                    messageText += `👤 *Username*: ${attributes.username}\n`;
                    messageText += `📛 *Nama*: ${attributes.first_name} ${attributes.last_name}\n`;
                    messageText += `🔄 *Status*: ${status}\n\n`;
                }
            }

            // Jika tidak ada admin yang ditemukan di halaman ini
            if (adminCount === 0) {
                return reply(`❌ Tidak ada admin ditemukan pada halaman ${page}.`);
            }

            // Menambahkan informasi halaman dan total admin
            let pagination = data.meta.pagination;
            messageText += `📄 *Halaman*: ${pagination.current_page}/${pagination.total_pages}\n`;
            messageText += `🔢 *Total Admin*: ${adminCount}\n`;

            // Mengirimkan daftar admin
            await OjiOffc.sendMessage(m.chat, { text: messageText }, { quoted: m });

            // Jika ada halaman berikutnya
            if (pagination.current_page < pagination.total_pages) {
                reply(`🔄 Gunakan perintah *${prefix}${command} ${parseInt(page) + 1}* untuk melihat halaman selanjutnya.`);
            }
        } catch (error) {
            console.error(error);
            // Mengirim pesan jika terjadi kesalahan
            reply('❌ Terjadi kesalahan saat mengambil daftar admin. Silakan coba lagi nanti.');
        }
    }
};