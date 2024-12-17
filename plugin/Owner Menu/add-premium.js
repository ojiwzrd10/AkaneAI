module.exports = {
    command: ['addpremium', 'addprem'],
    operate: async (context) => {
        const { args, moment, reply, isCreator, OjiOffc } = context;
        if (!isCreator) return reply(mess.owner);
        if (!args[0] || !args[1]) return reply("Format salah! Gunakan format: .addprem <nomor> <durasi>\nContoh: .addprem 6283170801193 30d");
        let nomor = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        let durasiInput = args[1];
        let durasi = parseInt(durasiInput);
        let satuan = durasiInput.replace(/[0-9]/g, '').toLowerCase();
        if (!durasi || !['d', 'm'].includes(satuan)) return reply("Durasi salah! Gunakan format <angka>d (hari) atau <angka>m (bulan)\nContoh: .addprem 6283170801193 30d");
        let durasiMS = satuan === 'd' ? durasi * 24 * 60 * 60 * 1000 : durasi * 30 * 24 * 60 * 60 * 1000;
        let premiumExpires = Date.now() + durasiMS;
        if (nomor in db.data.users) {
            if (db.data.users[nomor].premium) return reply(`User ${args[0]} sudah menjadi *User Premium!*`);
            db.data.users[nomor].limit += 10000;
            db.data.users[nomor].balance += 10000000000;
            db.data.users[nomor].premium = true;
            db.data.users[nomor].premiumExpires = premiumExpires;
            let expiredDate = moment(premiumExpires).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY');
            let pushname = db.data.users[nomor].name || "Pengguna";
            reply(`Berhasil menjadikan user ${args[0]} sebagai *User Premium* selama ${durasi} ${satuan === 'd' ? 'hari' : 'bulan'}!`);
            OjiOffc.sendMessage(nomor, { text: `Selamat ${pushname}, Anda sekarang sudah menjadi *User Premium*.\n\nNama User : ${pushname}\nExpired Premium : ${expiredDate}` });
        } else {
            reply(`User ${args[0]} tidak terdaftar di database bot.`);
        }
    }
};