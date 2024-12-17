const fs = require('fs');
const path = require('path');

module.exports = {
    command: ['addplugin'],
    operate: async (context) => {
        const { m, text, reply, isCreator } = context;
        if (!isCreator) return reply('*⚠️ Peringgatan :* Fitur Ini Khusus Owner Bot');
        if (!text) return reply('*⚪ Example : addplugin namaFile.js|kodePlugin*');
        const [filename, ...pluginCodeArr] = text.split('|');
        const pluginCode = pluginCodeArr.join('|').trim();
        if (!filename || !pluginCode) return reply('*⚪ Example : addplugin namaFile.js|kodePlugin*');
        const pluginFolderPath = path.join(__dirname, '..', 'Main Menu');
        const pluginFilePath = path.join(pluginFolderPath, filename);
        if (!fs.existsSync(pluginFolderPath)) fs.mkdirSync(pluginFolderPath, { recursive: true });
        const pluginContent = `${pluginCode}`;
        fs.writeFile(pluginFilePath, pluginContent, 'utf8', (err) => {
            if (err) return reply('Terjadi kesalahan saat membuat plugin');
            reply(`Plugin berhasil ditambahkan dengan nama ${filename}`);
        });
    }
};