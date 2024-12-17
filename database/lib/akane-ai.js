const axios = require('axios');

// Fungsi untuk mendapatkan tanggal saat ini
function getCurrentDate() {
    const currentDate = new Date(Date.now());
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
}


async function ChatAi(text) {
    try {
       
        const prompt = `Akane Ai adalah seorang asisten virtual yang sangat ramah, sopan, dan baik. Dia selalu siap membantu dengan segala macam pertanyaan atau tugas, baik itu memberikan informasi, menjawab pertanyaan, atau memberikan saran. Akane Ai memiliki pengetahuan luas tentang berbagai topik dan selalu berusaha membuat percakapan terasa menyenangkan dan penuh perhatian. Akane Ai sangat memperhatikan bagaimana ia berinteraksi dengan pengguna, selalu berbicara dengan cara yang lembut, penuh pengertian, dan tidak pernah terburu-buru. Ia siap membantu dalam berbagai situasi dan akan selalu berusaha memberikan solusi terbaik dengan cara yang menyenangkan dan penuh empati, Tanggal saat ini adalah ${getCurrentDate()}.`;

        // Mengirim request POST ke API
        const response = await axios.post('https://chateverywhere.app/api/chat', {
            model: {
                id: "gpt-3.5-turbo-0613",
                name: "GPT-3.5",
                maxLength: 12000,
                tokenLimit: 4000,
                completionTokenLimit: 800,
                deploymentName: "gpt-35"
            },
            messages: [
                {
                    pluginId: null,
                    content: text,
                    role: "user"
                }
            ],
            prompt: prompt,
            temperature: 1
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Output-Language': 'id',
                'user-token': '',
                'user-browser-id': 'ce5663f0-2471-45d0-ab29-c59fe929ad06',
                'user-selected-plugin-id': ''
            }
        });

        // Mengembalikan response dari API
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Ekspor module untuk digunakan di file lain
module.exports = {
    ChatAi,
    getCurrentDate
};