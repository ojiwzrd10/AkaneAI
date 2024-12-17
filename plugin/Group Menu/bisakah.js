module.exports = {
    command: ['bisakah'],
    operate: async (context) => {
        const { args, m, reply, mess } = context;

        if (!m.isGroup) return reply(mess.group);
        if (!args[0]) return reply(`*Contoh: .bisakah pertanyaanmu*`);

        const name = args.join(' ');
        if (name.length > 40) return reply(`*Maksimal 40 Karakter*`);

        const responses = [
            'gatau',
            'Ko Nanya aku?',
            'Bisa Bisa',
            'Semangat Pasti Bisa',
            'Iya Deh Insyallah',
            'mungkin bisa',
            'Gamungkin Bisa Jir',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        reply(`❏ *Nama: ${name}*\n❏ *Jawaban: ${randomResponse}*`);
    },
};