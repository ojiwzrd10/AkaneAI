const axios = require('axios');

const formatAudio = [ 'mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav', '4k' ];
const formatVideo = [ '360', '480', '720', '1080', '1440' ];

const ddownr = {
  download: async (url, format) => {
    try {
      const response = await axios.get(`https://p.oceansaver.in/ajax/download.php?copyright=0&format=${format}&url=${url}`, {
        headers: {
          'User-Agent': 'MyApp/1.0',
          'Referer': 'https://ddownr.com/enW7/youtube-video-downloader'
        }
      });
    
      const data = response.data;
      const media = await ddownr.cekProgress(data.id);
      return {
        success: true,
        format: format,
        title: data.title,
        thumbnail: data.info.image,
        downloadUrl: media
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },
  cekProgress: async (id) => {
    try {
        const progressResponse = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
            headers: {
                'User-Agent': 'MyApp/1.0',
                'Referer': 'https://ddownr.com/enW7/youtube-video-downloader'
            }
        });

        const data = progressResponse.data;
        const progress = data.progress;

        if (progress === 1000) {
            console.log("✔️ 100% - Video siap diunduh!");
            return data.download_url; // Kembali ke URL unduhan jika selesai
        } else {
            // Membuat Progress Bar dalam Console
            const barLength = 30; // panjang bar yang ingin ditampilkan
            const filledLength = Math.round(barLength * (progress / 1000));
            const emptyLength = barLength - filledLength;
            const progressBar = `=${'='.repeat(filledLength)}${' '.repeat(emptyLength)} ${Math.round((progress / 1000) * 100)}%`;

            // Menampilkan Progress Bar
            process.stdout.write(`\r${progressBar} Loading...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik untuk cek lagi
            return ddownr.cekProgress(id); // Panggil lagi untuk mengecek progress berikutnya
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return { success: false, message: error.message };
    }
}
}

module.exports = { ddownr };