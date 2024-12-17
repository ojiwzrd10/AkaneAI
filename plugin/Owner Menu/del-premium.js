module.exports = {
    command: ['delpremium', 'hapuspremiun', 'dellpremium', 'delprem'],
    operate: async (context) => {
        const { args, prefix, command, reply, isCreator } = context;
        if (!isCreator) return reply(mess.owner);
        if (!args[0]) return reply(`*⚪ Example :* ${prefix + command} 6283170801193`);
        let user = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (db.data.users[user].premium === false) return reply(`User ${args[0]} bukan *User Premium!*`);
        if (user in db.data.users) {
            db.data.users[user].premium = false;
            reply("Berhasil menghapus *User Premium*");
        } else {
            reply(`User ${args[0]} tidak terdaftar di database bot`);
        }
    }
};