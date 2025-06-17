const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "thanks",
    alias: ["thanksto", "dev"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message = `
╭─⪨ 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 ⪩ :
│
│👨‍💻 𝐃𝐄𝐕:𝐃𝐀𝐖𝐄𝐍𝐒
│🪀 𝐍𝐔𝐌:+13058962443
│──────────────────────
│🛠️ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:©𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗
│──────────────────────
│🙋‍♂️ 𝐇𝐄𝐋𝐋𝐎 @${m.sender.split("@")[0]}
│
╰─────────────────────✙
`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/aqudsn.png' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter', // remplace avec ton vrai newsletterJid si besoin
                    newsletterName: '⪨𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗⪩',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
