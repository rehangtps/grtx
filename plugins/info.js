let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
decode: @iWild

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @rehangtps12
➥ YouTube:
Rehan Gtps

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Indosat: 0815-1124-5024
╠➥ Gopay: 0815-1124-5024
╠➥ Ovo: 0815-1124-5024
║>Request? Wa.me/6285889758808
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

