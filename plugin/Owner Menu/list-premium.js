module.exports = {
    command: ['listprem', 'listpremium'],
    operate: async (context) => {
        const { isCreator, reply, m, OjiOffc } = context;

        if (!isCreator) return reply('*⚠️ Peringatan :* Command ini hanya untuk pemilik bot.');

        let user = Object.keys(db.data.users);
        let ar = [];
        let urut = 1;
        let teks = '\n*❏ LIST USER PREMIUM*\n\n';

        user.forEach((e) => {
            if (db.data.users[e].premium === true) {
                let no = urut++;
                teks += `${no}. @${e.split("@")[0]}\n`;
                ar.push(e);
            }
        });

        if (ar.length < 1) {
            return reply("Tidak ada user premium.");
        } else {
            OjiOffc.sendMessage(m.chat, {
                text: teks,
                contextInfo: { mentionedJid: [...ar] }
            }, { quoted: m });
        }
    }
};