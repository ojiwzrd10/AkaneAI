module.exports = {
    command: ['fitur', 'totalfitur'],
    operate: async (context) => {
        const { reply, totalFiturPlugin, totalFitur } = context;

        reply(`📑 *Total Fitur ${global.botname}*

*📂 Plugin : ${totalFiturPlugin()} Fitur*
*📋 Case : ${totalFitur()} Fitur*`);
    }
};