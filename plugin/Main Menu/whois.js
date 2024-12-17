module.exports = {
    command: ['whois'],
    operate: async (context) => {
        const { reply, text } = context;
        if (!text) return reply(`Masukkan Domain/Sub Domain!\n\n*Contoh:* google.com`);
        if (text.includes('https://') || text.includes('http://')) return reply(`Tolong masukkan domain/sub domain secara lengkap. Contoh: google.com`);
        const options = { method: 'GET', headers: { 'Authorization': 'Token=0d0c6d01edd38992edece70052424a6a9e3add6c01b11d851d907f6d95a02333' } };
        try {
            const response = await fetch(`https://whoisjson.com/api/v1/whois?domain=${text}`, options);
            const data = await response.json();
            reply(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(error);
            reply('*Terjadi kesalahan saat memproses permintaan WHOIS.*');
        }
    }
};