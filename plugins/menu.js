const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪ ᴍʏ ᴅᴇᴀʀ ꜰʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴀᴡᴀɪꜱ-ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀᴡᴀɪꜱ*

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *ᴀᴡᴀɪꜱ ᴍᴅ*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *ᴄʀᴇᴡ ᴀᴡᴀɪꜱ*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━ᴀᴡᴀɪs ᴍᴅ━━━━━━•♡*

*╭────❒⁠⁠⁠⁠* *DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.🔥ғʙ <ᴜʀʟ>*
*┋* *.🔥ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.🔥ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.🔥ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.🔥ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.🔥ᴛᴛ<ᴜʀʟ>*
*┋* *.🔥ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.🔥ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.🔥ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.🔥ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.🔥ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.🔥ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.🔥ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋* *.🔥ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋* *.🔥ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┕───────ᴀᴡᴀɪs ᴍᴅ─────────❒*

*╭────❒⁠⁠⁠⁠* *🏴‍☠️SEARCH-CMD 🏴‍☠️* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*┋* *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*|* *.ᴛᴛꜱ (BHEN CHOD YAHA GALIYA LIKHNA GANDU)*
*┕────────ᴀᴡᴀɪs ᴍᴅ────────❒*

*╭────❒⁠⁠⁠⁠* *😂AI-CMD 😂* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┕────────ᴀᴡᴀɪs ᴍᴅ────────❒*

*╭────❒⁠⁠⁠⁠* *🍫 OWNER-CMD 🍫* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕────────ᴀᴡᴀɪs ᴍᴅ───────❒*

*╭────❒⁠⁠⁠⁠* *🍫GROUP-CMD 🍌* *❒⁠⁠⁠⁠* 
*┋* *.♥️💀ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.♥️💀ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.♥️💀ᴀᴅᴅ*
*┋* *.♥️💀ᴋɪᴄᴋ*
*┋* *.♥️💀sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.♥️💀sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.♥️💀ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.♥️💀ᴅᴇᴍᴏᴛᴇ*
*┋* *.♥️💀ᴛᴀɢᴀʟʟ*
*┋* *.♥️💀ɢᴇᴛᴘɪᴄ*
*┋* *.♥️💀ɪɴᴠɪᴛᴇ*
*┋* *.❤️💀ʀᴇᴠᴏᴋᴇ*
*┋* *.♥️💀ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.♥️💀ᴀʟʟʀᴇǫ*
*┋* *.♥️💀ᴍᴜᴛᴇ*
*┋* *.♥️💀ᴜɴᴍᴜᴛᴇ*
*┋* *.♥️💀ʟᴏᴄᴋɢᴄ*
*┋* *.♥️💀ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.💀♥️ʟᴇᴀᴠᴇ*
*┋* *.♥️💀ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.♥️💀ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.♥️💀ᴊᴏɪɴ*
*┋* *.♥️💀ʜɪᴅᴇᴛᴀɢ*
*┋* *.♥️💀ɢɪɴғᴏ*
*┋* *.♥️💀ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.♥️💀ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.♥️💀ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.♥️💀sᴇɴᴅᴅᴍ*
*┕─────────ᴀᴡᴀɪs ᴍᴅ───────❒*

*╭────❒⁠⁠⁠⁠* *📃 MAIN-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕────────ᴀᴡᴀɪs ᴍᴅ────────❒*

*╭────❒⁠⁠⁠⁠* *♥️CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┕────────ᴀᴡᴀɪs ᴍᴅ─────❒*

*╭────❒⁠⁠⁠⁠* * ♥️RANDOM-CMD ♥️* *❒⁠⁠⁠⁠* 
*┋* *.💀ᴋɪɴɢ*
*┋* *.💀ᴅᴏɢ*
*┋* *.💀ᴀɴɪᴍᴇ*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.💀ᴀɴɪᴍᴇɢɪʀʟ5*
*┕──────────ᴀᴡᴀɪs ᴍᴅ─────❒*

*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.❤️💀ɪᴍɢ*
*┕─────────ᴀᴡᴀɪs ᴍᴅ──────❒*

*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.❤️💀ᴛʀᴛ*
*┋* *.❤️💀ᴊᴏᴋᴇ*
*┋* *.❤️💀ᴍᴏᴠɪᴇ*
*┋* *.❤️💀ꜰᴀᴄᴛ*
*┋* *.❤️💀ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.❤️💀ɢᴘᴀꜱꜱ*
*┋* *.❤️💀ʜᴀᴄᴋ*
*┋* *.❤️💀ǫᴜᴏᴛᴇ*
*┋* *.❤️💀ꜱʀᴇᴘᴏ*
*┋* *.❤️💀ᴅᴇꜰɪɴᴇ*
*┕─────────ᴀᴡᴀɪs ᴍᴅ───────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

┏━━━━━━━━━━━━━━━━━━━
*https://whatsapp.com/channel/0029VashGieHAdNP11OHXH3P*
┗━━━━━━━━━━━━━━━━━━━
*_______ᴀᴡᴀɪs ᴍᴅ_________*
*|* *:ᴡᴇʟʟ ᴄᴏᴍᴇ ɪɴ ʙᴜɢ ᴍᴇɴᴜ:*
*|* *:.ᴄʜᴀᴛ ʙᴜɢ* 
*|* *:.ᴜᴅ ʙᴜɢ*
*|* *:.ᴍᴀɪɴ ʙᴜɢ*
*|* *:.fαкє νσтє/50,cнαнηαƖ Ɩιηк,2,ρσƖƖ*
*|* *:.ƒαкε яεαcт,50,gc/cнαниαl lιик,иαмε ѕαмε cσρч*
*|* *:.𝑶𝑵𝑳𝒀 𝑭𝑶𝑹 𝑷𝑹𝑰𝑴𝑬𝑼𝑰𝑴 𝑼𝑺𝑬𝑹 𝑵o𝑻 𝑭𝑶𝑹 𝑻𝑨𝑻𝑨 𝑼𝑺𝑬𝑹*

> *ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴀᴡᴀɪsxᴄʜᴜᴢᴢᴀ-ᴍᴅ*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:`${config.ALIVE_IMG}`},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
