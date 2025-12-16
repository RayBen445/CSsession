/**
 * Example Configuration File - Copy this to config.js and customize
 * 
 * This is an example showing how to customize the session generator
 * with your own company details.
 */

module.exports = {
    // Company/Brand Information
    COMPANY_NAME: "Your Company Name",
    BRAND_NAME: "Your Bot Name",
    AUTHOR: "Your Name",
    CREATOR_NAME: "Your Full Name",
    
    // Contact Information
    PHONE_NUMBER: "1234567890",  // WhatsApp number with country code, no +
    PHONE_NUMBER_WITH_MSG: "YOUR_MESSAGE_ID",  // From wa.me/message/YOUR_MESSAGE_ID
    
    // Social Media Links
    YOUTUBE_CHANNEL: "youtube.com/@yourchannel",
    INSTAGRAM: "instagram.com/yourusername",
    GITHUB_USERNAME: "yourgithub",
    
    // WhatsApp Links
    WHATSAPP_GROUP: "https://chat.whatsapp.com/YOUR_GROUP_INVITE",
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/YOUR_CHANNEL_ID",
    
    // Repository Links
    BOT_REPO: "https://github.com/yourusername/your-bot",
    PLUGINS_REPO: "https://github.com/yourusername/your-plugins",
    SESSION_REPO: "https://github.com/yourusername/session-generator",
    
    // Bot Configuration
    BOT_NAME: "Your Bot Name",
    
    // Messages (Customize these with your branding)
    PAIRING_SUCCESS_MESSAGE: `*_Pair Code Connected by YOUR COMPANY*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WELCOME TO YOUR BOT 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *YouTube:* _youtube.com/@yourchannel_
║❒ *Owner:* _https://wa.me/1234567890_
║❒ *Repo:* _https://github.com/yourusername/your-bot
║❒ *Group:* _https://chat.whatsapp.com/YOUR_GROUP
║❒ *Channel:* _https://whatsapp.com/channel/YOUR_CHANNEL
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`,

    QR_SUCCESS_MESSAGE: `*_Session Connected By YOUR COMPANY_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『AMAZING YOU'VE CHOSEN YOUR BOT』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *YouTube:* _youtube.com/@yourchannel
║❒ *Owner:* _https://wa.me/1234567890_
║❒ *Repo:* _https://github.com/yourusername/your-bot_
║❒ *Group:* _https://chat.whatsapp.com/YOUR_GROUP_
║❒ *Channel:* _https://whatsapp.com/channel/YOUR_CHANNEL_
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`,
    
    // Server Configuration
    DEFAULT_PORT: 8000,
    
    // Page Titles
    MAIN_PAGE_TITLE: "Your Bot Session Generator",
    PAIR_PAGE_TITLE: "Pair Code",
    
    // UI Text
    PAIRING_HEADER: "YOUR BOT PAIRING CODE",
    PAIRING_SUBHEADER: "Made By Your Company 💻.",
    PAIRING_INSTRUCTIONS: "Enter Your Number with Country Code.",
    
    // Pastebin API Key (if you want to use Pastebin for session storage)
    PASTEBIN_API_KEY: "YOUR_PASTEBIN_API_KEY"
};
