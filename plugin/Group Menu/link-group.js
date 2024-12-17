module.exports = {
    command: ['linkgroup', 'linkgc'],
    operate: async (context) => {
        const { isCreator, isBotAdmins, m, reply, OjiOffc, from, groupMetadata } = context;
        
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);
        
        try {
            let response = await OjiOffc.groupInviteCode(from);
            OjiOffc.sendText(from, `⚪ Berikut Adalah Link Group Dari Group  : ${groupMetadata.subject}\nhttps://chat.whatsapp.com/${response}\n`, m, { detectLink: true });
        } catch (error) {
            console.error("Error while fetching group link:", error);
            reply("⚠️ Terjadi kesalahan saat mengambil link grup.");
        }
    }
};