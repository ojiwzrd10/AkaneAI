const yts = require('yt-search');

module.exports = {
    command: ['yts', 'ytsearch'],
    operate: async (context) => {
        const { args, m, reply, mess, prefix, OjiOffc, OjiGtg } = context;

        if (!args[0]) return reply(`Example : ${prefix + 'yts'} Drunk Text`);

await OjiOffc.sendMessage(m.chat, { react: { text: "🌀", key: m.key }});

        try {
            let search = await yts(args.join(' '));

            let teks = '*🏖️ YouTube Search*\n\nMendapatkan Data Search : ' + args.join(' ') + '\n\n';
            let no = 1;

            for (let i of search.all) {
                teks += `❏ No : ${no++}\n⭔ Type : ${i.type}\n❏ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n❏ Views : ${i.views}\n❏ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n❏ Url : ${i.url}\n\n─────────────────\n\n`;
            }

            await OjiOffc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: OjiGtg });
            
            await OjiOffc.sendMessage(m.chat, { react: { text: "✅", key: m.key }});
        } catch (error) {
            console.error(error);
            reply('Terjadi kesalahan saat mencari di YouTube.');
        }
    },
};