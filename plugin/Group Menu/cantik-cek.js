module.exports = {
    command: ['cantikcek', 'cekcantik'],
    operate: async (context) => {
        const { args, m, reply, mess } = context;

        if (!m.isGroup) return reply(mess.group);
        if (!args[0]) return reply(`*Contoh: .cantikcek nama mu*`);

        const name = args.join(' ');
        if (name.length > 40) return reply(`*Maksimal 40 Karakter*`);

        const responses = [
            'Normal',
            'Biasa Aja',
            'B aja',
            'Rajin Perawatan Mba',
            'Lumayan',
            'Cantik Dikit',
            'Cantikan Juga Pacar Oji',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        reply(`❏ *Nama: ${name}*\n❏ *Jawaban: ${randomResponse}*`);
    },
};