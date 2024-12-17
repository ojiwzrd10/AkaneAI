module.exports = {
    command: ['dnslookup'],
    operate: async (context) => {
        const { reply, text } = context;

        if (!text) {
            return reply(`Masukkan Domain/Sub Domain!\n\n*Contoh:* oredigital.shop`);
        }

        if (text.includes('https://') || text.includes('http://')) {
            return reply(`Tolong masukkan domain/sub domain secara lengkap. Contoh: oredigital.shop`);
        }

        try {
            // fetch pertama
            const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
            const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
                headers: { 'X-Api-Key': api_key },
                contentType: 'application/json'
            })
            .then(response => response.text())
            .catch(error => {
                console.log(error);
                return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
                .then(response => response.text())
                .then(data => {
                    reply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${data}`);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                    reply('*Tidak dapat memproses permintaan DNS Lookup*');
                });
            });
            reply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${res1}`);
            console.log(res1);

        } catch (error) {
            console.log(error);
            reply('*Invalid data!*');
        }
    }
};