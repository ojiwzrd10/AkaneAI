module.exports = {
    command: ['sangecek', 'ceksange', 'cekgay', 'ceklesbi', 'lesbicek', 'gaycek', 'tobrutcek', 'cekkontol'],
    operate: async (context) => {
        const { prefix, command, args, m, reply, mess } = context;

        if (!m.isGroup) return reply(mess.group);
        if (!args[0]) return reply(`*Contoh: ${prefix + command} pertanyaanmu*`);

        const name = args.join(' ');
        if (name.length > 40) return reply(`*Maksimal 40 Karakter*`);

        const responses = [
            '10%',
            '20%',
            '30%',
            '40%',
            '50%',
            '60%',
            '70%',
            '80%',
            '90%',
            '100%',
            
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        reply(`❏ *Nama: ${name}*\n❏ *Jawaban: ${randomResponse}*`);
    },
};