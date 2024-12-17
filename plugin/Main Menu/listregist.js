const fs = require('fs');

module.exports = {
    command: ['listregis'],
    operate: async (context) => {
        const { isCreator, reply, mess } = context;
        if (!isCreator) return reply(mess.owner);

        let anu = require('../../database/registered');
        let teks = `*# Daftar Pengguna ${global.botname}*\n\n`;
        teks += `*Total Pengguna* : ${anu.length}\n\n`;

        anu.forEach((v, i) => {
            teks += `*Id* : ${v.id}\n`;
            teks += `*Name* : ${v.name}\n`;
            teks += `*Age* : ${v.age}\n`;
            teks += `*Ns* : ${v.time}\n───────────────\n`;
        });

        reply(teks);
    }
};
