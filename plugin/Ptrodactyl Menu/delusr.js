const fetch = require('node-fetch');

module.exports = {
    command: ['deluser', 'hapususer'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium, isCreator } = context;

        if (!isPremium) return reply('⚠️ Akses ditolak. Anda tidak memiliki izin untuk menggunakan perintah ini.');
        
        // Memastikan hanya pembuat bot yang dapat menghapus pengguna
        if (!isCreator) return reply('❌ Anda tidak memiliki izin untuk menghapus pengguna.');

        // Mengambil ID pengguna dari argumen
        let userId = text.trim();

        // Memastikan ID pengguna telah diberikan
        if (!userId) {
            return reply('🔍 Silakan berikan ID pengguna yang ingin dihapus.\n\nContoh: *' + prefix + command + ' <ID_User>*');
        }

        try {
            // Menghapus pengguna dari API
            let response = await fetch(`${global.domain}/api/application/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta
                }
            });

            // Memeriksa respons dari API
            let res = response.ok ? { errors: null } : await response.json();

            // Memeriksa apakah ada kesalahan, seperti pengguna tidak ditemukan
            if (res.errors) {
                return reply('❌ *USER TIDAK DITEMUKAN*');
            }

            // Mengirimkan pesan sukses
            reply('✅ *BERHASIL MENGHAPUS PENGGUNA*');
        } catch (error) {
            console.error(error);
            // Mengirim pesan jika terjadi kesalahan saat menghapus pengguna
            reply('❌ Terjadi kesalahan saat menghapus pengguna. Silakan coba lagi nanti.');
        }
    }
};