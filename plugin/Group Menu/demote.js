module.exports = {
    command: ['demote'],
    operate: async (context) => {
        const { isAdmins, isGroupOwner, isCreator, isBotAdmins, m, reply, text, OjiOffc } = context;
        
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.botAdmin);
        if (!text && !m.quoted) return reply('Masukkan nomor yang ingin di-demote');

        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
        try {
            await OjiOffc.groupParticipantsUpdate(m.chat, [users], 'demote');
            reply('✅ Berhasil mendemote user.');
        } catch (error) {
            console.error(error);
            reply('⚠️ Terjadi kesalahan saat mendemote user.');
        }
    }
};