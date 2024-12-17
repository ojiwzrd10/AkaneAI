const fs = require('fs')
const chalk = require('chalk')

global.baileys = require('@adiwajshing/baileys')
global.usePairingCode = true

global.ownername = 'OJIWZRD'
global.owner = ['6283170801193'] 
global.versionbot = "V1.0.1"
global.creator = "6283170801193"
global.nomorbot = "6285725254154"
global.botname = 'Akane AI'
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'OjiSession'
global.linkgc = 'https://chat.whatsapp.com/FgD78haOH0DJvWZcac8yfM'
global.thumbnail = 'https://pomf2.lain.la/f/0wgnpckz.jpg'
global.foter1 = 'SIMPLE WHATSAPP BOT OJIBOTZz'
global.urlwa = "https://wa.me/6282353119669"
global.foter2 = 'SIMPLE WHATSAPP BOT OJIBOTZz'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ghost = '`'
global.packname = 'Sticker By'
global.author = 'ORE DIGITAL'

global.domain = 'https://api.ojiofficial.my.id'
global.apiPlta = 'ptla_Aur1mSnPkMo2ZfsyrKSCenLA3ZDHCPxkcTO72kGmBAN'
global.apiPltc = 'ptlc_qvVERrGEYvar2dhY9wKuLIqjx428xaulHLkb81c4rZk'
global.eggs = '15' 
global.location = '1' 



//=================================================//
global.onlypc = false
global.onlygc = false


//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

//mess
global.mess = {
    premium: ('🌊 Kayanya Kamu Harus Beli Premium Dulu Atau Minta Premium langsung Ke Owner'),
    done: ('🐣 Done kak'),
    owner: ('🎀 *Loh Kamu Siapa? Khusus Owner* 🤴'),
    wait: ('🐣 *Tunggu Sebentar*'),
    group: '🔖 *Fitur Ini Khusus Grup*',
    admin: '🔖 *Fitur Ini Khusus Admin*',
    botAdmin: '🐥 *Jadiin Bot Admin Terlebih Dahulu Donggg,Buat Mengakses Fiturnya*',
    linkvalid: '🌐 *Kayanya Link Kamu Dalah Deh*', 
    error: '😿 *Kayanya Ada Yang Erorr Nih*',
    limit: `Yah Limit kamuu habis nih,Cek limit mu sekarang Dengan Cara Ketik .limit`,
    regis: (`🐣Hayoloooo\nKamu Belum Terdaftar Kedalam Database Bot,Silahkan Daftar Telebih Dahulu Dengan Cara\n\n.Daftar`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})