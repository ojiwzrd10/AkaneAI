const fetch = require('node-fetch');

module.exports = {
    command: ['delserver', 'hapusserver'],
    operate: async (context) => {
        const { m, text, prefix, command, reply, isPremium, isCreator } = context;

        if (!isPremium) return reply('⚠️ Akses ditolak. Anda tidak memiliki izin untuk menggunakan perintah ini.');

        // Memastikan hanya pembuat bot yang dapat menghapus server
        if (!isCreator) return reply('❌ Anda tidak memiliki izin untuk menghapus server.');

        // Ambil ID server dari argumen
        let serverId = text.trim();

        // Memastikan ID server telah diberikan
        if (!serverId) {
            return reply('🔍 Silakan berikan ID server yang ingin dihapus.\n\nContoh: *' + prefix + command + ' <ID_Server>*');
        }

        try {
            // Mengirim permintaan DELETE ke API untuk menghapus server
            let response = await fetch(`${global.domain}/api/application/servers/${serverId}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiPlta,
                }
            });

            // Mengecek apakah respons dari server berhasil
            let res = response.ok ? { errors: null } : await response.json();

            // Menangani jika server tidak ditemukan
            if (res.errors) {
                return reply('❌ *SERVER TIDAK DITEMUKAN*');
            }

            // Mengirimkan pesan sukses jika server berhasil dihapus
            reply('✅ *SERVER BERHASIL DIHAPUS*');
        } catch (error) {
            console.error(error);
            // Mengirim pesan jika terjadi kesalahan saat menghapus server
            reply('❌ Terjadi kesalahan saat mencoba menghapus server. Silakan coba lagi nanti.');
        }
    }
};