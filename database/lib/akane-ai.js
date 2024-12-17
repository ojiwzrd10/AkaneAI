require('../../setting')
const axios = require('axios');

const Akane = {
  Chat: {},
};

async function startSession(m) {
  if (!Akane.Chat) Akane.Chat = {};
  Akane.Chat[m.chat] = { pesan: [] };
  return '🔵 Auto Ai Berhasil Terhubung Ke Chat Ini!.';
}

async function endSession(m) {
  if (Akane.Chat && Akane.Chat[m.chat]) {
    delete Akane.Chat[m.chat];
    return '🔵 Auto Ai Berhasil Di Matikan Di Chat Ini!';
  } else {
    return '🔴 Tidak Ada Sessi Chat Apapun Di Sini!.';
  }
}

async function queryAkaneAPI(budy) {
  try {
    const response = await axios.get(`https://api.acaw.my.id/v2/gpt-logic?prompt=${global.prompt}&q=${encodeURIComponent(budy)}`);
    if (response.data.status === 200) {
      return response.data.data.result;
    } else {
      return 'Terjadi kesalahan saat menghubungi AI.';
    }
  } catch (e) {
    return 'Terjadi error saat menghubungi server.';
  }
}

module.exports = { Akane, startSession, endSession, queryAkaneAPI };
