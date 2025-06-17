const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭┈───────────────•*
*ʜᴇʟʟᴏ 👋 ${pushname}*
*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ: 𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➩ 𝗧𝗛𝗘 𝗠𝗔𝗦𝗧𝗘𝗥*
*│  ◦* *ɴɪᴄᴋɴᴀᴍᴇ➩ master*
*│  ◦* *ᴀɢᴇ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
*│  ◦* *ᴄɪᴛʏ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ* 
*│  ◦* *ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴇᴠ*
*╰┈───────────────•*

*⪨ • 𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗 - ᴘʀᴏᴊᴇᴄᴛ • ⪩*

*╭┈───────────────•*
*│  ◦* *✰➩DAWENS BOY x 𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗*
*│  ◦* *✰➩ᴏɴʟʏ 2 ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*

*•────────────•✱*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DAWENS BOY*
*•────────────•✱*
`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/nsk6ix.png' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398101781980@newsletter', // ou ton JID actuel
            newsletterName: '𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
