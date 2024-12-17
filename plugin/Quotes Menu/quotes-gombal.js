module.exports = {
    command: ['gombalan', 'quotesgombalan', 'quotes-gombal'], 
    operate: async (context) => {
        const { reply } = context;

        const gombal = [
            "Ku tuliskan namamu di langit, angin meniupnya. Ku tuliskan namamu di laut, badai membawanya. Ku tuliskan namamu di hatiku, cinta namanya.",
            "Kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
            "Hari Minggu itu weekend tapi kalau cinta kita will never end.",
            "Angkutan kota jauh dekat 2 ribu, kalau kamu jauh dekat ya di hatiku.",
            "Aku tidak peduli ramalan BMKG, sebab saat hujan, badai bahkan tsunami aku akan tetap bertahan pada cintamu.",
            "Ada 3 hal di dunia ini yang tidak bisa kuhitung, jumlah bintang di langit, ikan di laut dan cintaku padamu.",
            "Sekarang aku gendutan gak sih? Kamu tau gak kenapa? Soalnya kamu udah mengembangkan cinta yang banyak di hatiku.",
            "Aku ingin kita seperti sandal jepit sebab hanya ada dua, tidak ada yang namanya orang ketiga.",
            "Kalau hitungan satu sampai sepuluh, cintaku cukup nomor dua, yaitu dualem banget.",
            "Katanya kalau sering hujan itu bisa bikin seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
            "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
            "Aku rela menjadi lilin dalam hati kamu, dan kamu yang jagain lilinnya.",
            "Cita-citaku dulu pengen jadi dokter tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
            "Nek buku jendela ilmu, sliramu jendela atiku.",
            "Cintaku padamu seperti utang. Awalnya kecil, didiemin, tau-tau gede sendiri.",
            "Aku rela dipenjara seumur hidup, asalkan pelanggarannya karena mencintaimu.",
            "Ketika kau mencintainya dan kau hanya mendapat hujan, cintailah aku sebagai pelangimu.",
            "Cowok boleh nggak sih minum jamu sari rapet, soalnya aku mau rapetin hati aku ke hati kamu.",
            "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, nggak pergi-pergi sih!",
            "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari."
        ];

        const gombalan = gombal[Math.floor(Math.random() * gombal.length)];
        reply(gombalan);
    }
};