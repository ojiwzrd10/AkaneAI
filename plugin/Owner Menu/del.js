module.exports = {
    command: ['del', 'hapuspesan', 'remove'],
    operate: async (context) => {
        const { isCreator, reply, m, OjiOffc } = context;

        if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

        if (!m.quoted) return reply('Tidak ada pesan yang dapat dihapus.');

        let { chat, fromMe, id, isBaileys } = m.quoted;

        OjiOffc.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.quoted.id,
                participant: m.quoted.sender
            }
        });
    }
};