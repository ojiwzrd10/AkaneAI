module.exports = {
    command: ['gantengcek', 'cekganteng'],
    operate: async (context) => {
        const { args, m, reply, mess } = context;

        if (!m.isGroup) return reply(mess.group);
        if (!args[0]) return reply(`*Contoh: .gantengcek oji*`);

        const name = args.join(' ');
        if (name.length > 40) return reply(`*Maksimal 40 Karakter*`);

        const responses = [
            'Normal',
            'Biasa Aja',
            'B aja',
            'Rajin Perawatan Bang',
            'Lumayan',
            'Ganteng Dikit',
            'Gantengan Juga Oji',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        reply(`❏ *Nama: ${name}*\n❏ *Jawaban: ${randomResponse}*`);
    },
};