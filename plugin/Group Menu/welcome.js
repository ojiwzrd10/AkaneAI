module.exports = {
    command: ['welcome'],
    operate: async (context) => {
        const { args, m, isAdmins, isCreator, reply, OjiOffc, from, welcm, wlcm } = context;
        if (!isAdmins && !isCreator) return reply('⚠️ *Peringatan :* Feature Ini Hanya Untuk Admin Group Maupun Owner, Dan Untuk Mengaktifkan Fitur Ini Jadikan Bot Sebagai Admin Terlebih Dahulu');
        if (!m.isGroup) return reply('Buat Di Group Bodoh');
        if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');
        if (args[0] === "on") {
            if (welcm) return reply('Sudah Aktif');
            wlcm.push(from);
            var groupe = await OjiOffc.groupMetadata(from);
            var members = groupe['participants'];
            var mems = [];
            members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
            });
            OjiOffc.sendMessage(from, { text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
            if (!welcm) return reply('Sudah Non Aktif');
            let off = wlcm.indexOf(from);
            wlcm.splice(off, 1);
            reply('Sukses Mematikan Welcome  di group ini');
        }
    }
};