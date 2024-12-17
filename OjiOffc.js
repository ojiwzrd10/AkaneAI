
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const cron = require('node-cron')
const axios = require('axios')
const dns = require('dns');
const FormData = require('form-data')
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const { URL_REGEX } = require('@adiwajshing/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./database/lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./database/lib/myfunc')
const ntilink = JSON.parse(fs.readFileSync("./database/lib/ntilink.json"))
const { remini,findSongs } = require("./database/lib/scraper")
const { color, bgcolor } = require('./database/lib/color')
const yts = require("yt-search")
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./database/lib/register.js')

const { ChatAi } = require('./database/lib/akane-ai.js')
const { hariini, time, tanggal2, wita, ucapanWaktu } = require('./database/lib/moment.js')

//==================> 
module.exports = OjiOffc = async (OjiOffc, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: OjiOffc.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, OjiOffc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
OjiOffc.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "YT OJIOFFICIAL"
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await OjiOffc.decodeJid(OjiOffc.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await OjiOffc.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
var dataListG = (type === "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''



//===================================//

const OjiGtg = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

async function reply(teks) {
const nedd = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {  
showAdAttribution: true,
title: `${botname}`,
body: foter1,
previewType: "VIDEO",
thumbnailUrl: thumbnail, 
sourceUrl: hariini, 
},
},
text: teks,
};
return OjiOffc.sendMessage(m.chat, nedd, {
quoted: OjiGtg,
});
}

async function replymenu(txt) {
OjiOffc.sendMessage(m.chat, {
      video: fs.readFileSync('./database/thumb.mp4'),
      gifPlayback: true,
      caption: txt,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: foter1,
      thumbnailUrl: thumbnail,
      sourceUrl: `https://oredigital.shop`, 
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: OjiGtg
                    })
                    }
     
OjiOffc.autoshalat = OjiOffc.autoshalat ? OjiOffc.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? OjiOffc.user.id : m.sender
	let id = m.chat 
    if(id in OjiOffc.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Yogyakarta dan sekitarnya._`
    OjiOffc.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete OjiOffc.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }



jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (ntilink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await OjiOffc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return OjiOffc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return OjiOffc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return OjiOffc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await OjiOffc.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
OjiOffc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
OjiOffc.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}




//===================================//


if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: OjiOffc.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, OjiOffc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
OjiOffc.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

try {
ppuser = await OjiOffc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await OjiOffc.updateProfileStatus(`${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${OjiOffc.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
OjiOffc.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}
            
if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('OjiOffc' in chats)) chats.OjiOffc = false
} else global.db.data.chats[m.chat] = {
mute: false,
OjiOffc: false
}


let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}








cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./OjiOffc.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }




const getAllJsFiles = (dirPath) => {
    let results = [];
    const list = fs.readdirSync(dirPath);

    list.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllJsFiles(filePath));
        } else if (file.endsWith('.js')) {
            results.push(filePath);
        }
    });

    return results;
};

const totalFiturPlugin = () => {
    const pluginFiles = getAllJsFiles('./plugin');
    
    let totalCommands = 0;

    pluginFiles.forEach((file) => {
        const plugin = require(path.resolve(file));
        if (plugin.command && Array.isArray(plugin.command)) {
            totalCommands += plugin.command.length;
        }
    });

    return totalCommands;
};


     
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
     
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { OjiOffc, m, chatUpdate, store, body, require, smsg, tanggal, getTime, from, isUrl, sleep, clockString, toNumber, limitnya, fetchJson, getBuffer, jsonformat, format, generateProfilePicture, parseMention, getRandom, pickRandom, moment, budy, prefix, isCmd, command, args, pushname, text, q, quoted, mime, isMedia, botNumber, isCreator, isPremium, uselimit, groupMetadata, groupName, participants, groupAdmins, sleep, isBotAdmins, totalFitur, totalFiturPlugin, isAdmins, welcm, wlcm, isAdmins, time, reply, command }
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}


                    

     
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

//=======================================//
//=======================================//

switch(command) {
case "menu": {
if (!isRegistered) return reply(mess.regis)
if (args.length < 1) return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users

⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *Daftar Menu Yang Tersedia*
┆≫ Menu All
┆≫ Menu Owner
┆≫ Menu Group
┆≫ Menu Main
┆≫ Menu Search
┆≫ Menu Ai
┆≫ Menu Quotes
┆≫ Menu Downloader
┆≫ Menu Cpanel
*<───── A黒川茜࿐ ─────>*
`)
if (args[0] === "All") {
return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU OWNER*
┆≫ add
┆≫ addcase
┆≫ addlimit
┆≫ addmoney
┆≫ addplugin
┆≫ addpremium
┆≫ backupdatabase
┆≫ minlimit
┆≫ dellpremium
┆≫ del
┆≫ getbio
┆≫ listpremium
┆≫ minmoney
┆≫ addcase
┆≫ public
┆≫ self
┆≫ restart
┆≫ autobio
┆≫ antilink

⩩ *MENU GROUP*
┆≫ apakah
┆≫ bisakah
┆≫ artinama
┆≫ cekcantil
┆≫ cekkhodam
┆≫ cekperawan
┆≫ ceksifat
┆≫ demote
┆≫ cekganteng
┆≫ kick
┆≫ linkgroup
┆≫ ramalanjodoh
┆≫ promote
┆≫ ramalannasib
┆≫ sangecek
┆≫ cekgay
┆≫ ceklesbi
┆≫ tagall
┆≫ ttp
┆≫ welcome

⩩ *MENU MAIN*
┆≫ listregis
┆≫ confes
┆≫ menfes
┆≫ qc
┆≫ totalfitur
┆≫ afk
┆≫ topglobal
┆≫ sticker
┆≫ tourl
┆≫ toimg
┆≫ remini
┆≫ profile
┆≫ dnslookup

⩩ *MENU SEARCH*
┆≫ animesearch
┆≫ chord
┆≫ lirik
┆≫ cuaca
┆≫ harilibur
┆≫ infogempa
┆≫ lacakip
┆≫ dnslookup
┆≫ whois
┆≫ animeindo-search
┆≫ animeindo-detail
┆≫ subdomain
┆≫ ttstalk
┆≫ wastalk
┆≫ cariresep
┆≫ bacaresep
┆≫ kodepos

⩩ *MENU AI*
┆≫ akane-ai
┆≫ miku
┆≫ nahida
┆≫ nami
┆≫ taylorswift
┆≫ txt2img

⩩ *MENU QUOTES*
┆≫ quotes-bucin
┆≫ quotes-hacker
┆≫ quotes-islami
┆≫ quotes-pantun
┆≫ quotes-sindiran
┆≫ quotes-bacot
┆≫ quotes-gombal

⩩ *MENU DOWNLOADER*
┆≫ tiktoks
┆≫ mediafire
┆≫ ytsearch / yts
┆≫ instagram
┆≫ tiktok
┆≫ spotify
┆≫ play

⩩ *MENU CPANEL*
┆≫ 1GB SAMPAI 25GB + UNLI
┆≫ createadmin
┆≫ listuser
┆≫ listserver
┆≫ listadminpanel
┆≫ detailuser
┆≫ hapusserver
┆≫ hapususer

*<───── A黒川茜࿐ ─────>*
 `)
} else if (args[0] === "Owner") {
return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU OWNER*
┆≫ add
┆≫ addcase
┆≫ addlimit
┆≫ addmoney
┆≫ addplugin
┆≫ addpremium
┆≫ backupdatabase
┆≫ minlimit
┆≫ dellpremium
┆≫ del
┆≫ getbio
┆≫ listpremium
┆≫ minmoney
┆≫ addcase
┆≫ public
┆≫ self
┆≫ restart
┆≫ autobio
┆≫ antilink
`)
} else if (args[0] === "Group") {
    return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU GROUP*
┆≫ apakah
┆≫ bisakah
┆≫ artinama
┆≫ cekcantil
┆≫ cekkhodam
┆≫ cekperawan
┆≫ ceksifat
┆≫ demote
┆≫ cekganteng
┆≫ kick
┆≫ linkgroup
┆≫ ramalanjodoh
┆≫ promote
┆≫ ramalannasib
┆≫ sangecek
┆≫ cekgay
┆≫ ceklesbi
┆≫ tagall
┆≫ ttp
┆≫ welcome
`)
} else if (args[0] === "Main") {
    return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU MAIN*
┆≫ listregis
┆≫ confes
┆≫ menfes
┆≫ qc
┆≫ totalfitur
┆≫ afk
┆≫ topglobal
┆≫ sticker
┆≫ tourl
┆≫ toimg
┆≫ remini
┆≫ profile
┆≫ dnslookup
`)
} else if (args[0] === "Search") {
    return replymenu(` 
Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU SEARCH*
┆≫ animesearch
┆≫ chord
┆≫ lirik
┆≫ cuaca
┆≫ harilibur
┆≫ infogempa
┆≫ lacakip
┆≫ dnslookup
┆≫ whois
┆≫ animeindo-search
┆≫ animeindo-detail
┆≫ subdomain
┆≫ ttstalk
┆≫ wastalk
┆≫ cariresep
┆≫ bacaresep
┆≫ kodepos
`)
} else if (args[0] === "Ai") {
    return replymenu(` Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU AI*
┆≫ akane-ai
┆≫ miku
┆≫ nahida
┆≫ nami
┆≫ taylorswift
┆≫ txt2img
`)
} else if (args[0] === "Quotes") {
return replymenu(` Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU QUOTES*
┆≫ quotes-bucin
┆≫ quotes-hacker
┆≫ quotes-islami
┆≫ quotes-pantun
┆≫ quotes-sindiran
┆≫ quotes-bacot
┆≫ quotes-gombal
`)
 } else if (args[0] === "Downloader") {
return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU DOWNLOADER*
┆≫ tiktoks
┆≫ mediafire
┆≫ ytsearch / yts
┆≫ instagram
┆≫ tiktok
┆≫ spotify
┆≫ play
`)
 } else if (args[0] === "Cpanel") {
return replymenu(`Haii *${pushname} 👋*, *${ucapanWaktu}*, Sebelumnya perkenalkan aku adalah ${global.botname}, disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya
${readmore}
⩩ *Informasi Bot*
🤖 *Nama Bot* : ${global.botname}
👤 *Nama Owner* : ${global.ownername}
💻 *Runtime* : ${runtime(process.uptime())}
📒 *Total User* : ${Object.keys(db.data.users).length} Users
⩩ *Informasi Pengguna*
🔢 *Nomor* : @${m.sender.split('@')[0]}
🔛 *Status* : ${isCreator ? "Owner" : "User"}
📋 *User* : ${isPremium ? 'Premium' : 'Free'}
🌀 *Limit :* ${limitnya}
💴 *Balance :* $${toRupiah(balancenya)}

⩩ *MENU CPANEL*
┆≫ 1GB SAMPAI 25GB + UNLI
┆≫ createadmin
┆≫ listuser
┆≫ listserver
┆≫ listadminpanel
┆≫ detailuser
┆≫ hapusserver
┆≫ hapususer

`)
}
    }
    break



//>=========ORE DIGITAL=======<\\

case "public": {
if (!isCreator) return reply(mess.owner)
OjiOffc.public = true
reply(mess.done)
}
break

case "self": {
if (!isCreator) return reply(mess.owner)
OjiOffc.public = false
reply(mess.done)
}
break

case 'restart':
if (!isCreator) return reply('⚠️ *Peringatan :* Ada Yang Mencoba Merestart Bot, Pengguna Tidak Di Kenal!.')
reply(`Mulai Merestart.....`)
await sleep(3000)
process.exit()
break

case 'autobio':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
autobio = true
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'off') {
autobio = false
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break

case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (ntilink) return m.reply('_Sudah Diaktifkan_')
ntilink.push(from)
fs.writeFileSync('./database/lib/ntilink.json', JSON.stringify(ntilink))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await message.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
message.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!ntilink) return m.reply('_Sudah Dimatikan_')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/lib/ntilink.json', JSON.stringify(ntilink))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break

case 'resetlinkgc':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
OjiOffc.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply(`Text Nya ?`)
await OjiOffc.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
OjiOffc.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
OjiOffc.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break
        
case 'afk': {
  if (!m.isGroup) return m.reply(mess.group)
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
reply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
}
break

case "panduan":{
reply(`⚠️ *Mohon Di Baca Dengan Baik*

*1. Pembukaan*

Sebelumnya Terimakasih Sudah Mau Menggunakan *${global.botname}*, Support Saya Terus Untuk Mengembangkan Script Bot Ini Dengan Cara Subscribe YT *@oredigital* Selaku Dev Dari Bot Tersebut

*2. Cara Pakai*

Untuk Memulai Bot Anda Bisa Langsung Memberi Pertanyaan Apapun, Atau Untuk Melihat Menu Menu Yang Tersedia Ketikan Saja Command *.Menu*

*3. Privasi Dan Ke Amanan*

Data Yang Kami Simpan Bukanlah Data Pribadi Dari Seseorang Jadi Jangan Khawatir, 1x24 Jam Bot Akan Mengalami Restart, Chat Antara Pengguna & Bot Bersifat Encripty Jadi Owner Tidak Boleh Membacanya Terkecuali Ada Pelanggaran Yang Dilakukan Pengguna


*5. Apa Saja Pelanggaran Yang Dimaksud ?*

01. Spam Terhadap Bot Secara Berlebihan
02. Bersifat Toxic & Arogan
03. Jika Tidak Subscribe Channel Ore Digital Termasuk Pelanggaran 😁
04. Bersifat Rasisme Dalam Menggunakn Bot


*6. Penutupan*

Terimakasih Sudah Menggunakan OJIBOTZz Semoga Harimu Menyenakngkan

*Copyright © *${global.botname}* All Rights Reserved*
`)}
break

case 'dadu': {
				if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')	
            	let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
                let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
            	reply(klow)
            	}
            break
case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!isRegistered) return m.reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar')	
if (!text) throw `*Example : ${prefix + command} saya menang?*`
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let koh = krng[Math.floor(Math.random() * krng.length)]
                let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
                OjiOffc.sendMessage(m.chat, { text: jawab }, {quoted: m})
				}
				break
        case "susunkata": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (susunkata[m.chat]) return OjiOffc.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: susunkata[m.chat][0] })
var anu = await bochil.susunkata()
console.log("Jawaban : " + anu.jawaban)
susunkata[m.chat] = [
await reply(`*── 「 SUSUN KATA 」 ──*

≡ Soal : ${anu.soal}
≡ Tipe : ${anu.tipe}
≡ Reward : +1000 Xp
≡ Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (susunkata[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete susunkata[m.chat]
}
}, 180000)
]
}
break

case "topglobal": {
reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users
${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case "buylimit": case "belilimit": {
if (!args[0]) return reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return reply('20')
if ((args[0]).includes('.')) return reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break

case "claim": {
if (db.data.users[m.sender].claim == 0) return reply("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!")
const hadiah = randomNumber(50000, 70000)
const hadiah2 = randomNumber(100, 200)
db.data.users[m.sender].balance += hadiah
db.data.users[m.sender].limit += hadiah2
db.data.users[m.sender].claim = 0
reply(`Berhasil *Claim* hadiah harian\n\n+ $${toRupiah(hadiah)} *Balance*\n+ ${hadiah2} *Limit*`)
}
break

case "ceklimit": case "limit": case "profile":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await OjiOffc.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
👤 Name : *${pushname}*
🌐 Nomor : *@${m.sender.split('@')[0]}*
📖 Limit : *${limitnya}*
💰 Balance : *$${toRupiah(balancenya)}*`
OjiOffc.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: 'PROFILE & LIMIT & BALANCE', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: OjiGtg})
} else {
let teksnya = `
👤 Name : *${pushname}*
🌐 Nomor : *@${m.sender.split('@')[0]}*
🗓️ Limit : *${limitnya}*
💰 Balance : *$${toRupiah(balancenya)}*`
OjiOffc.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: 'PROFILE & LIMIT & USER', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: OjiGtg})
}}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (limitnya < 1) return reply(mess.limit)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await OjiOffc.sendImageAsStickerAV(from, media, OjiGtg, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await OjiOffc.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
uselimit()}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return reply(mess.limit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await OjiOffc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
OjiOffc.sendMessage(from, { image: buffer }, {quoted:OjiGtg})
fs.unlinkSync(ran)
})
uselimit()}
break

case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
OjiOffc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: OjiGtg})
}
break
        
case 'tourl': {
    if (!quoted || !quoted.mimetype || !/image/.test(quoted.mimetype)) {
        return reply('*⚪ Example :* tourl (reply/tag gambarnya)');
    }


    try {
        let media = await OjiOffc.downloadAndSaveMediaMessage(quoted);
        let buffer = fs.readFileSync(media);

        const { pomf } = require('./database/lib/uploud');
        let url = await pomf(buffer);

        reply(`*Berikut Gambar Yang Berhasil Di Jadikan Link, Bilang Apa Sama ${global.botname}?😊*\n${url}`);
        await fs.unlinkSync(media);
    } catch (err) {
        reply('Terjadi kesalahan saat mengupload file.');
    }
}
break

case 'jarak': case 'jarakkota': case 'jarakdari': {
if (limitnya < 1) return reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return reply(`example ${prefix + command} Yogyakarta|Jakarta`)
reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return OjiOffc.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: OjiGtg })
uselimit()}
break

case 'brat': {
  if (!text) {
    return reply(`*⚪ Example:* ${prefix + command} Aku ${global.botname}`);
  }

  if (text.length > 250) {
    return reply(`*⚠️ Text Tidak Boleh Terlalu Panjang*`);
  }
  
  reply(mess.wait)

  OjiOffc.sendMessage(
        m.chat,
        { 
          image: { url: `https://mxmxk-helper.hf.space/brat?text=${text}` },
          caption: `*Berhasil Menjadikan Image, Sekarang Silahkan ketik dan reply gambar ini dengan caption .sticker*`,
          mentions: [m.sender]
      },
      { quoted: m }
    );
}
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `⩩ *Kamu Berhasil Terdaftar* ⩩

🌐 Nomor : @${m?.sender.split('@')[0]}
🤴 Nama : ${pushname}
🎀 Status : Sukses✅ 
🔖 Sn : ${serialUser}

Haii ${pushname} Kamu Kini Berhasil Terdaftar,Kini kamu sudah bisa mengakses menu,Gunakan bot sebaik baiknya dan jangan spam yaa`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
OjiOffc.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `TERDAFTAR KEDALAM DATABASE`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
OjiOffc.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `TERDAFTAF KEDALAM DATABASE`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break


// game menu
case "tebakbomb": case "bomb": {
if (!m.isGroup) return reply(mess.group)
if (m.chat in OjiOffc.bomb) return OjiOffc.sendText(m.chat, "Masih ada game yang belum terselsaikan!", OjiOffc.bomb[m.chat][0]);
OjiOffc.bomb = OjiOffc.bomb ? OjiOffc.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await OjiOffc.sendText(m.chat, teks, OjiOffc.bomb[id] ? OjiOffc.bomb[id][0] : m);
let { key } = msg

let v;
OjiOffc.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (OjiOffc.bomb[id]) OjiOffc.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, OjiOffc.bomb[id][0]);
delete OjiOffc.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
OjiOffc.casino = OjiOffc.casino ? OjiOffc.casino : {}
if (m.chat in OjiOffc.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else OjiOffc.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete OjiOffc.casino[m.chat]
}
}
break

case "suit": {
if (!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return reply(`Selesaikan dulu suit mu yang sebelumnya`)
if (m.quoted || text) {
if (froms === botNumber) return reply(`Tidak bisa bermain suit dengan bot!`)
if (froms === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri!`)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let hadiah = randomNumber(2000, 3000)
let timeout = 60 * 1000
let id = 'suit_' + Date.now()

suit[id] = {
id: id,
penantang: m.sender,
ditantang: froms,
status: 'WAIT',
hadiah: hadiah,
chat: await OjiOffc.sendMessage(m.chat, {text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`, contextInfo: {mentionedJid: [froms, m.sender]}}, {quoted: OjiGtg}),
timeout: timeout,
waktu: setTimeout(() => {
if (suit[id]) OjiOffc.sendMessage(m.chat, {text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`, contextInfo: {mentionedJid: [froms]}}, {quoted: suit[id].chat})
delete suit[id]
}, timeout)
}
} else reply('@tagtarget')
}
break

case 'judi': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `乂  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
case 'ping': {
let os = require('os')
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

let run = runtime(process.uptime())
var cpuuuu = os.cpus();
replymenu(`*${ucapanWaktu}, ${pushname}*

🗓️ *Hari Ini* : ${hariini}
⚪ *Jam*      : ${time}

🌟 *INFORMATION BOT* 🌟

━━━━━━━━━━━━━━━━━━━━
💡 *Creator*      : ${global.author}
🔴 *Youtube*      : @oredigital
🌐 *Website*      : oredigital.shop
🤖 *Bot Name*    :  ${global.botname}
🔧 *Type*         : Case + Plugin
📒 *Version Bot*  : ${global.versionbot}
👥 *Users*        : ${Object.keys(db.data.users).length}
📶 *Prefix*       : Tanpa Prefix
📮 *Versi Nodejs* : ${process.version}
💾 *RAM Usage*    : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🧊 Cpu Model      : ${cpuuuu[0].model}
⏳ *Runtime*      : ${run}
━━━━━━━━━━━━━━━━━━━━

✨ *Additional Stats* ✨
- *Total Cases*: ${totalFitur()}
- *Total Plugins*: ${totalFiturPlugin()}

*⚪ Untuk Mendapatkan Info Script Silahkan Bergabung Ke Youtube Chanel Oredigital maupun ke WhatsApp Chenel Oredigital.

Copyright © Akane AI.

`)
    }
        break



        
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
if (from.endsWith('broadcast')) return;
if (m.isBaileys) return;
if (m.key.fromMe) return;
let handled = false; 
for (const plugin of plugins) { 
if (plugin.command.includes(command)) {
try {
handled = true; 
break; 
} catch (error) {
console.error(`Error executing plugin ${plugin.filePath}:`, error);
handled = false;
}
}
} 
if (!handled) {
const aiResponse = await ChatAi(budy); 
await reply(aiResponse); 
}


//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
OjiOffc.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
