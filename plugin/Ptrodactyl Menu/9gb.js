const fetch = require('node-fetch');

module.exports = {
    command: ['9gb'],
    operate: async (context) => {
        const { m, text, prefix, command, OjiOffc, reply, isPremium } = context;

        if (!isPremium) return reply('⚠️ Beli Premium User Untuk Bisa Menggunakan Command Khusus Premium'); 

        let t = text.split(',');
        if (t.length < 2) return reply(`*Format Salah*\n*⚪Example : ${command} username,6283170801193`);

        let username = t[0];
        let u = t[1] + '@s.whatsapp.net';
        let name = username + " 9GB";
        let egg = global.eggs;
        let loc = global.location;
        let memo = "9024"; 
        let cpu = "275"; 
        let disk = "0"; 
        let email = `${username}901@oredigital.shop`;
        let akunlo = "https://pomf2.lain.la/f/i7sh5rs5.jpg";
        let password = username + "001";

        if (!u) return;

        let d = (await OjiOffc.onWhatsApp(u.split`@`[0]))[0] || {};
        
        
        let f = await fetch(`${global.domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiPlta
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password
            })
        });

        let data = await f.json();
        if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        
        let f2 = await fetch(`${global.domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiPlta
            }
        });

        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        
        let f3 = await fetch(`${global.domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiPlta,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startup_cmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            })
        });

        let res = await f3.json();
        if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;

        
        let ctf = `🎉 *YEAY! Akun Anda Telah Berhasil Terdaftar di Panel Kami!* 🎉

🌟 *Selamat datang di dunia baru! Berikut adalah data panel Anda:* 
✨ *USERNAME:* ${user.username}
✨ *PASSWORD:* ${password}
✨ *LOGIN:* ${domain}

📍 *Hal-Hal yang Harus Diperhatikan:*
1. 🔐 *Data akun hanya akan dikirimkan sekali.* Jangan lupa untuk menyimpannya dengan aman. Jika hilang, kami tidak dapat mengirim ulang.
2. 🎯 *Garansi hanya berlaku satu kali.* Klaim garansi membutuhkan bukti pembelian yang sah.
3. 🚫 *Jangan gunakan skrip DDoS pada panel kami.* Pelanggaran dapat mengakibatkan pemblokiran akun dan server tanpa pemberitahuan.

💫 *Terima kasih telah bergabung! Nikmati perjalanan seru Anda bersama kami! Semoga pengalaman Anda menyenangkan!* 💫`;

        
        await OjiOffc.sendMessage(u, { image: { url: akunlo }, caption: ctf });
        let successMessage = "*Berhasil! Akun Panel telah dibuat.*";
        await OjiOffc.sendMessage(m.chat, { text: successMessage },{quoted:m});
    }
};