let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `♡𝐁𝐨𝐭 𝐃𝐞 𝐀𝐥𝐞𝐬𝐬𝐚♡: ${pesan}`
let teks = `𝐋𝐋𝐀𝐌𝐀𝐃𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𝐀𝐍𝐎𝐓𝐀𝐓𝐄 𝐎 𝐒𝐄𝐑𝐀𝐒 𝐂𝐔𝐏𝐎 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🥷🏻@${mem.id.split('@')[0]}\n`}
teks += `➥♡𝐁𝐨𝐭 𝐃𝐞 𝐀𝐥𝐞𝐬𝐬𝐚♡`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
