const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347046427837";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRTYTdFZ0U3RzBjaXBhcHZQVHFGWnNOVDhBT0JsbkE3SllFNjU4ZHJFNzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVtWEFGTWRTUU1DNWJzNzM3TG1OYndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQ3NmFiOGYtMDM3NC00NjQ4LWJjYTgtZWRjZWY0MmEzZTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDI1NSxcbiAgICAgIDE4OSxcbiAgICAgIDc1LFxuICAgICAgMTA0LFxuICAgICAgMTYyLFxuICAgICAgNSxcbiAgICAgIDIxMCxcbiAgICAgIDE4NCxcbiAgICAgIDE2LFxuICAgICAgNTAsXG4gICAgICAxNzgsXG4gICAgICA2MyxcbiAgICAgIDUxLFxuICAgICAgMjM5LFxuICAgICAgMjYsXG4gICAgICAzMSxcbiAgICAgIDM3LFxuICAgICAgMjEsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxMjQsXG4gICAgICAzMixcbiAgICAgIDMsXG4gICAgICAxODYsXG4gICAgICAxMTAsXG4gICAgICA0NCxcbiAgICAgIDEzMCxcbiAgICAgIDE1OSxcbiAgICAgIDExLFxuICAgICAgMjM4LFxuICAgICAgNDAsXG4gICAgICA4LFxuICAgICAgMTg5LFxuICAgICAgMjE1LFxuICAgICAgNixcbiAgICAgIDEzNSxcbiAgICAgIDg3LFxuICAgICAgMzcsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUI4UlNQUDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDY0Mjc4Mzc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXRUIgQk9aWlwiLFxuICAgIFwibGlkXCI6IFwiMTg1Mjg5MjE3NzMyODQyOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t2NDlzZ0lFSXp2dXJVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWtzY3NZY1lWcE5KNC94SzJxU0lmWXNXWTQzVENXUVhRQXdSYzV5aTEzcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuY1llTUUrWDlVV3FRdkVKMXpMUG1IWDlMc25Qc2RNckFwL2d3SnpzM05JamFGVG0vLzhXRFVWNHhPN0oxa0JhcitLYnI2c1I5Y1lseG8vTXFsRTVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRSWUwbXQ4QzZGd2xjVzlCTzJ6eG5jeTl0YlhrelowLzFETUI1YkFORmVmOTR3L3RVY292KzZJVnU0amFZS3RJTXUvbVpoR1ZMWmhnWlZpYzBaOHBCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ2NDI3ODM3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzI2Mjg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDg1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIODUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpc0YvcWcvald3ZEVxeWF6S0J2ZGNsQ2hvbVFFYTlGMFJpZkpDV0NieHRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMDA0MjczMDcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlsyLDAsM119LFwidGltZXN0YW1wXCI6XCIxNzIyNzI2MjIwMTkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
