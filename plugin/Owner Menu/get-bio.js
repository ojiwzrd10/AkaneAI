module.exports = {
    command: ['getbio'],
    operate: async (context) => {
        const { isCreator, m, reply, OjiOffc } = context;

        if (!isCreator) return reply('*⚠️ Peringatan :* Command ini hanya untuk pemilik bot.');

        try {
            let who;
            if (m.isGroup) {
                who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            } else {
                who = m.quoted.sender ? m.quoted.sender : m.sender;
            }

            let bio = await OjiOffc.fetchStatus(who);
            reply(bio.status);
        } catch {
            if (m.text) {
                return reply('⚠️ Bio bersifat pribadi atau Anda belum membalas pesan orang tersebut!');
            } else {
                try {
                    let whoto = m.quoted ? m.quoted.sender : m.sender;
                    let bio = await OjiOffc.fetchStatus(whoto);
                    reply(bio.status);
                } catch {
                    return reply('⚠️ Bio bersifat pribadi atau Anda belum membalas pesan orang tersebut!');
                }
            }
        }
    }
};