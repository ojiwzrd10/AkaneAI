module.exports = {
    command: ['kick'],
    operate: async (context) => {
        const { isCreator, isAdmins, isGroupOwner, isBotAdmins, m, reply, OjiOffc, text } = context;
        if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return;
        if (!text && !m?.quoted) return reply('Masukkan nomor/tag yang ingin di-kick');
        let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await OjiOffc.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log);
    }
};