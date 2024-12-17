const moment = require('moment-timezone')
const PhoneNum = require('awesome-phonenumber')

let regionNames = new Intl.DisplayNames(['en'], {
    type: 'region'
})

module.exports = {
    command: ['wastalk'],
    operate: async (context) => {
        const { reply, text, OjiOffc, prefix, command: cmd, m } = context
        let num = m.quoted?.sender || m.mentionedJid?.[0] || text
        if (!num) return reply(`Ex: ${prefix + cmd} @tag / 628xxx`)
        num = num.replace(/\D/g, '') + '@s.whatsapp.net'
        if (!(await OjiOffc.onWhatsApp(num))[0]?.exists) return reply('User not exists')
        let img = await OjiOffc.profilePictureUrl(num, 'image').catch(_ => 'https://btch.pages.dev/file/70e8de9b1879568954f09.jpg')
        let bio = await OjiOffc.fetchStatus(num).catch(_ => {})
        let name = await OjiOffc.getName(num)
        let business = await OjiOffc.getBusinessProfile(num)
        let format = PhoneNum(`+${num.split('@')[0]}`)
        let country = regionNames.of(format.getRegionCode('international'))
        let res = `*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
        img ? await OjiOffc.sendMessage(m.chat, {
            image: {
                url: img
            },
            caption: res,
            mentions: [num]
        }, {
            quoted: m
        }) : reply(res)
    }
};