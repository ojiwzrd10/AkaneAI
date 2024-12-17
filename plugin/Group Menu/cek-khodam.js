const fs = require('fs')
const gtts = require('node-gtts')

module.exports = {
    command: ['cekkhodam'],
    operate: async (context) => {
        const { m, args, reply, OjiOffc } = context;
        const defaultLang = 'id';

        if (!m.isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');

        let lana;
        if (args.length === 0 || !args[0]) {
            return reply('Harap masukkan nama kamu.');
        } else {
            lana = args[0];
        }

        let lang = args[1];
        if (!lang || lang.length !== 2) {
            lang = defaultLang;
        }

        const khodam = [
            "Singa", "kosoong atau tidak ada", "Harimau", "Elang", "Serigala", "Naga", "Gajah", "Kuda", "Macan Tutul", 
            "Kerbau", "Burung Hantu", "Burung Rajawali", "Ikan Hiu", "Lumba-Lumba", "Ular", "Kura-Kura", "Tupai", "Paus", 
            "Kelelawar", "Kijang", "Banteng", "Rusa", "Anjing", "Kucing", "Buaya", "Kambing", "Kuda Nil", "Bebek", 
            "Angsa", "Ayam", "Merpati", "Burung Beo", "Burung Kenari", "Burung Kakatua", "Bunglon", "Cicak", "Kodok", 
            "Katak", "Tikus", "Landak", "Kanguru", "Koala", "Panda", "Beruang", "Rubah", "Lynx", "Leopard", "Jaguar", 
            "Cheetah", "Badak", "Zebra", "Antelop", "Unta", "Alpaka", "Llama", "Serigala Abu-abu", "Serigala Merah", 
            "Serigala Putih", "Harimau Putih", "Harimau Siberia", "Harimau Sumatra", "Gorila", "Orangutan", "Simpanse", 
            "Monyet", "Babun", "Lemur", "Iguana", "Komodo", "Salamander", "Belut", "Sotong", "Gurita", "Kepiting", 
            "Lobster", "Udang", "Kupu-kupu", "Lebah", "Tawon", "Kumbang", "Belalang", "Jangkrik", "Semut", "Kecoak", 
            "Laba-laba", "Kalajengking", "Serangga Tongkat", "Naga Laut", "Kuda Laut", "Duyung", "Putri Duyung", 
            "Burung Kolibri", "Burung Hantu Salju", "Burung Puyuh", "Burung Gagak", "Burung Pelikan", "Burung Albatros", 
            "Burung Flamingo", "Burung Hering", "Burung Camar", "Burung Pinguin", "Cincin", "Batu Akik", "Keris", 
            "Tongkat", "Pusaka", "Patung", "Mustika", "Tasbih", "Kalung", "Gelang", "Permata", "Pedang", "Mata Uang", 
            "Wesi Kuning", "Serat Tali", "Belati", "Cundrik", "Selendang", "Jarum", "Tombak", "Kerikil", "Kendi", 
            "Kain Kafan", "Topi", "Payung", "Sandal", "Kacamata", "Sabuk", "Sarung", "Tali Ikat Pinggang", "Surat", 
            "Kunci", "Lilin", "Peniti", "Sisir", "Cermin", "Kendi Air", "Piring", "Gelas", "Mangkuk", "Sendok", 
            "Sapu", "Gayung", "Tikar", "Bantal", "Guci", "Lentera", "Lampu", "Buku", "Pena", "Dupa", "Asbak", 
            "Cangkir", "Gantungan Kunci", "Kalender", "Sepeda", "Lukisan", "Batu Kerikil", "Batu Kali", "Kipas", 
            "Peci", "Sorban", "Rokok", "Topeng", "Angklung", "Suling", "Wayang", "Kuda-Kudaan", "Sepatu", 
            "Jam Tangan", "Kosong atau tidak ada"
        ];

        const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
        const text = `Khodam ${lana} adalah ${randomKhodam}`;

        const tts = (text, lang = 'id') => {
            return new Promise((resolve, reject) => {
                try {
                    const ttsInstance = gtts(lang);
                    const filePath = `${Date.now()}.mp3`;
                    ttsInstance.save(filePath, text, () => {
                        resolve(fs.readFileSync(filePath));
                        fs.unlinkSync(filePath);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        };

        let res;
        try {
            res = await tts(text, lang);
        } catch (e) {
            reply(`⚠️ Terjadi kesalahan: ${e}`);
            res = await tts(text, defaultLang);
        }

        reply(text);
        if (res) {
            await OjiOffc.sendMessage(
                m.chat, 
                { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "khodam.mp3" },
                { quoted: m }
            );
        }
    }
};