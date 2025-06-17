const { cmd } = require("../command");  
const { sleep } = require("../lib/functions");  

cmd({  
    pattern: "restart",  
    desc: "Restart 𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗",  
    category: "owner",  
    filename: __filename  
},  
async (conn, mek, m, { reply, isCreator }) => {  
    try {  
        if (!isCreator) {  
            return reply("Only the bot owner can use this command.");  
        }  

        const { exec } = require("child_process");  
        reply("𝗧𝗛𝗘-𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗 Restarting...");  
        await sleep(1500);  
        exec("pm2 restart all");  
    } catch (e) {  
        console.error(e);  
        reply(`${e}`);  
    }  
});