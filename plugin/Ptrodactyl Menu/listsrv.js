const fetch = require('node-fetch');

module.exports = {
    command: ['listsrv', 'listserver'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium } = context;

        if (!isPremium) return reply('⚠️ Beli Premium User Untuk Bisa Menggunakan Command Khusus Premium');

        // Menentukan halaman untuk pagination
        let page = text || '1';

        try {
            // Mengambil daftar server dari API
            let response = await fetch(`${global.domain}/api/application/servers?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta
                }
            });

            let data = await response.json();
            let servers = data.data;

            // Jika tidak ada server
            if (!servers || servers.length === 0) {
                return reply(`❌ Tidak ada server yang ditemukan di halaman ${page}.`);
            }

            // Membangun pesan daftar server
            let messageText = `🌐 *Daftar Server Anda:* 🌐\n\n`;
            for (let server of servers) {
                let attributes = server.attributes;
                let status = attributes.suspended ? '❌ *Suspended*' : '✅ *Aktif*';

                messageText += `🆔 *ID Server:* ${attributes.id}\n`;
                messageText += `📌 *Nama Server:* ${attributes.name}\n`;
                messageText += `🔄 *Status:* ${status}\n\n`;
            }

            // Menambahkan informasi pagination
            let pagination = data.meta.pagination;
            messageText += `📄 *Halaman:* ${pagination.current_page}/${pagination.total_pages}\n`;
            messageText += `🖥️ *Total Server:* ${pagination.total}\n`;

            // Mengirimkan daftar server
            await OjiOffc.sendMessage(m.chat, { text: messageText }, { quoted: m });

            // Jika ada halaman berikutnya
            if (pagination.current_page < pagination.total_pages) {
                reply(`🔍 Gunakan perintah *${prefix}${command} ${parseInt(page) + 1}* untuk melihat halaman selanjutnya.`);
            }
        } catch (error) {
            console.error(error);
            // Jika terjadi kesalahan
            reply('❌ Terjadi kesalahan saat mengambil daftar server. Silakan coba lagi nanti.');
        }
    }
};