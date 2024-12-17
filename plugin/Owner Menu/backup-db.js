const fs = require('fs'); 

module.exports = {
    command: ['backupdb', 'backupdatabase'],
    operate: async (context) => {
        const { isCreator, reply, OjiOffc, m } = context;
        if (!isCreator) return reply('⚠️ *Peringatan :* Fitur Ini Hanya Untuk Owner');

        const filePath = './database/database.json'; 
        if (!fs.existsSync(filePath)) {
            return reply('Database tidak ditemukan!');
        }

        try {
            const fileContent = fs.readFileSync(filePath); 
            OjiOffc.sendMessage(m.chat, {
                document: fileContent,
                fileName: 'database.json',
                mimetype: 'application/json'
            }, { quoted: m });
        } catch (err) {
            reply('Terjadi kesalahan saat melakukan backup database!');
            console.error('Error:', err);
        }
    }
};