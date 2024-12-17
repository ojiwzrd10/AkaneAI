const fetch = require('node-fetch');

module.exports = {
    command: ['addadmin', 'createadmin'],
    operate: async (context) => {
        const { m, text, reply, isPremium, isCreator, OjiOffc } = context;

        // Validasi hanya pengguna premium yang dapat mengakses
        if (!isPremium) return reply('⚠️ Akses ditolak. Anda memerlukan status premium untuk menggunakan perintah ini.');

        // Validasi hanya pembuat bot yang dapat membuat admin
        if (!isCreator) return reply('❌ Anda tidak memiliki izin untuk menambahkan admin.');

        // Memastikan input format yang benar
        let args = text.split(',');
        if (args.length < 2) {
            return reply(`*Format salah!*\nPenggunaan:\n.addadmin username,nomor\n\nContoh:\n.addadmin example,6281234567890`);
        }

        let username = args[0].trim();
        let nomor = args[1].trim();

        if (!username || !nomor) {
            return reply('❌ Username dan nomor tidak boleh kosong.\n\nContoh:\n.addadmin example,6281234567890');
        }

        // Membuat password default dan memformat nomor WhatsApp
        let password = username + "019";
        let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        try {
            // Mengirim permintaan ke API untuk membuat admin baru
            let response = await fetch(`${global.domain}/api/application/users`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta
                },
                body: JSON.stringify({
                    email: `${username}@gmail.com`,
                    username: username,
                    first_name: username,
                    last_name: "Admin",
                    language: "en",
                    root_admin: true,
                    password: password.toString()
                })
            });

            let data = await response.json();
            if (data.errors) {
                return reply(`❌ Gagal membuat admin:\n${JSON.stringify(data.errors[0], null, 2)}`);
            }

            let user = data.attributes;

            // Menyusun pesan detail admin
            let detailAdmin = `
✨ *DETAIL AKUN ADMIN PANEL* ✨

📌 *ID:* ${user.id}
🌐 *UUID:* ${user.uuid}
👤 *USERNAME:* ${user.username}
📧 *EMAIL:* ${user.email}
🦸 *NAMA:* ${user.first_name} ${user.last_name}
🌍 *BAHASA:* ${user.language}
🔐 *ADMIN:* ${user.root_admin ? '✅ Ya' : '❌ Tidak'}
📆 *DIBUAT PADA:* ${user.created_at}

🔗 *LOGIN:* ${global.domain}
`;

            // Mengirim detail ke grup
            await OjiOffc.sendMessage(m.chat, { text: detailAdmin });

            // Mengirim detail ke nomor WhatsApp pengguna
            await OjiOffc.sendMessage(nomornya, {
                text: `*DETAIL AKUN ADMIN PANEL ANDA* 📄\n\n` +
                      `👤 *USERNAME:* ${username}\n` +
                      `🔑 *PASSWORD:* ${password}\n` +
                      `🔗 *LOGIN:* ${global.domain}\n\n` +
                      `*NOTE:*\n` +
                      `1. Simpan data akun dengan baik.\n` +
                      `2. Klaim garansi harus disertai bukti pembelian.\n` +
                      `3. Jangan merusak server lain.\n` +
                      `4. Gunakan akun secara bijak.\n`
            });

        } catch (error) {
            console.error(error);
            return reply('❌ Terjadi kesalahan saat membuat admin. Silakan coba lagi nanti.');
        }
    }
};