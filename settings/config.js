const fs = require('fs')
const chalk = require('chalk')
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['233500850221']

global.gambar = "https://files.catbox.moe/zhbsht.jpg"
global.owner = "233500850221" //owner number
global.bankname = "OPAY WALLET"

global.banknumber = "0500850221"

global.bankowner = "Agnes"
global.creatorName = "Andrew"
global.ownernumber = '233500850221'  //creator number
global.location = "Ghana, Accra"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "Andrew" //footer section
global.link = "https://whatsapp.com/channel/0029Vav3pek65yD9mqSgd21B"
global.autobio = false//auto update bio
global.botName = "AKANE ⚡"
global.version = "𝙑𝟭"
global.botname = "AKANE MD"
global.author = "Andrew"
global.themeemoji = '🀄'
global.wagc = 'https://chat.whatsapp.com/BW2DeGMj0tVGbdgHFtHvj8'
global.thumbnail = 'https://files.catbox.moe/l9gpzm.jpg'
global.ownername = 'Andrew' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘙𝘪𝘤𝘩𝘪𝘦 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘙𝘪𝘤𝘩𝘪𝘦*`
  global.mess = {
wait: "```WAIT FOR AKANE 🀄```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒂𝒌𝒂𝒏𝒆",
   on: "akane active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "Akane off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by Richie",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for Richie beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
