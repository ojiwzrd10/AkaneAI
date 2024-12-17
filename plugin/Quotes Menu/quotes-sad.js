module.exports = {
    command: ['quotessad', 'quotes-sad'], 
    operate: async (context) => {
        const { reply } = context;

        const modesad = [
            'When lu udah berusaha ngelupain dia yang gabakal mungkin lu miliki, dan sial nya malah ketemu di dalam mimpi',
            'Jika tidak bisa bersatu denganmu setidaknya dunia pernah menjadi saksi bahwa aku benar benar mencintaimu',
            'Seharusnya dri dlu jngn berharap lebih kpd seseorang',
            'Lebih baik tersakiti,daripada harus menyakiti',
            'Hidup bukan sebuah perlombaan, nikmati aja setiap proses nya',
            'Kita punya harapan tapi semesta punya kenyataan',
            'Ternyata maksain komunikasi sama seseorang yang ga ada perasaan lebih sama kita itu nguras energi banget ya,',
            'Dipaksa baik baik saja diatas bumi yang sudah tidak baik baik saja',
            'Terkadang otak kita sudah beradaptasi tanpa kehadiran dia tapi hati sangat sulit untuk kehilangan dia',
            'Malam yg tenang tapi tidak dengan pikiran',
            'Ngentod knp dunia ga berpihak sama gw',
            'Kubaca kembali chat lama kita kemudian aku tersenyum dan akhirnya aku menangis',
            'Sudah kubilang payung hanya bisa dipakai untuk dua orang. Jika ada yang ketiga, maka salah satunya harus siap di guyur hujan beserta badainya. Tapi ini bukan tentang',
            'Mau balik lagi? Maaf hubungan ini tidak bisa berlanjut lagi hehe',
            'Feling lonley cape?,ya istirahat karna tuhan tau yang baik gak bikin kamu lonley',
            'Cape sama dunia nt terus mungkin Tuhan sudah menyiapkan jalan terbaik buat kamu'
        ];

        const modesada = modesad[Math.floor(Math.random() * modesad.length)];

        
        reply(modesada);
    }
};