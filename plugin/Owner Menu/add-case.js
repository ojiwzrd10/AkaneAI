module.exports = {
    command: ['addcase'],
    operate: async (context) => {
        const { m, text, reply, isCreator } = context;

        if (!isCreator) return reply('*⚠️ Peringatan : Feature Ini Khusus Owner Bot!*');
        if (!text) return reply('*⚪ Example : addcase kode casenya*');

        const fs = require('fs');
        const namaFile = 'OjiOffc.js';
        const caseBaru = `${text}`;

        fs.readFile(namaFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Terjadi kesalahan saat membaca file:', err);
                return reply('Terjadi kesalahan saat membaca file');
            }

            const posisiAwalGimage = data.indexOf("case 'afk':");

            if (posisiAwalGimage !== -1) {
                const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

                fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                    if (err) {
                        reply('Terjadi kesalahan saat menulis file');
                    } else {
                        reply('Case baru berhasil ditambahkan');
                    }
                });
            } else {
                reply('Tidak dapat menambahkan case dalam file.');
            }
        });
    }
};