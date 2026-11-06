const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'yoshikaaa.aternos.me', // Ganti dengan IP server Aternos kamu
  port: 19132, // Ganti dengan Port server Aternos kamu
  username: 'MochiLynCopu' // Nama akun bot di dalam game
});

bot.on('spawn', () => {
  console.log("Bot berhasil masuk ke server!");

  // Gerakan kecil secara berkala agar tidak kena kick AFK
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000); // Lompat setiap 30 detik
});

bot.on('end', (reason) => {
  console.log(`Bot terputus: ${reason}, mencoba menyambung ulang...`);
  setTimeout(() => {
    // Auto reconnect jika server mati/restart
    process.exit(1); 
  }, 5000);
});
