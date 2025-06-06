module.exports = {
    command: ['addlimit', 'tambahlimit'],
    operate: async (context) => {
        const { args, m, isCreator, reply, OjiOffc, prefix, command } = context;
        if (!isCreator) return reply('⚠️ *Peringatan :* Hanya Owner yang dapat menggunakan perintah ini');
        let user = args[0] + '@s.whatsapp.net';
        if (args[0] && args[1]) {
            if (isNaN(args[0])) return reply(`Contoh: ${prefix + command} 6283170801193 1000`);
            if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!");
            if (isNaN(args[1])) return reply(`Contoh: ${prefix + command} 6283170801193 1000`);
            db.data.users[`${user}`].limit += Number(args[1]);
            OjiOffc.sendMessage(m.chat, { text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}` });
        } else return reply(`Contoh: ${prefix + command} 6283170801193 1000`);
    }
};