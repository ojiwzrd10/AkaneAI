module.exports = {
    command: ['tagall'],
    operate: async (context) => {
        const { isAdmins, m, reply, q, participants, OjiOffc } = context;

        if (!isAdmins) return reply(mess.admin);
        if (!m.isGroup) return;

        let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`;

        for (let mem of participants) {
            teks += `⭔ @${mem.id.split('@')[0]}\n`;
        }

        OjiOffc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
    }
};