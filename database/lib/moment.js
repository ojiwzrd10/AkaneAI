const moment = require('moment-timezone');

// Mendapatkan waktu dengan format tertentu
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY');

const time = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss z');
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY');
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss');

// Fungsi untuk menentukan ucapan berdasarkan waktu
function getUcapanWaktu() {
    const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss');

    if (time2 >= "00:00:00" && time2 < "03:00:00") {
        return 'Selamat Tengah Malam 🌃';
    }
    if (time2 >= "03:00:00" && time2 < "05:00:00") {
        return 'Selamat Subuh 🌆';
    }
    if (time2 >= "05:00:00" && time2 < "10:00:00") {
        return 'Selamat Pagi 🌄';
    }
    if (time2 >= "10:00:00" && time2 < "15:00:00") {
        return 'Selamat Siang 🌤️';
    }
    if (time2 >= "15:00:00" && time2 < "18:00:00") {
        return 'Selamat Sore 🌇';
    }
    if (time2 >= "18:00:00" && time2 < "19:00:00") {
        return 'Selamat Petang 🌆';
    }
    return 'Selamat Malam 🏙️'; // Default untuk waktu >= 19:00:00
}

// Menjalankan scraper
const ucapanWaktu = getUcapanWaktu();

// Mengekspor data
module.exports = {
    hariini,
    time,
    tanggal2,
    wita,
    ucapanWaktu
};