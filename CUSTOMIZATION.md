# 🎨 Customization Guide

This guide explains how to customize the Session Generator with your own company/brand details.

## 📋 Quick Start

All customization is done through the `config.js` file. Simply edit this file to change all branding, contact information, and links throughout the application.

## 🔧 Configuration Options

Open `config.js` and modify the following sections:

### 1. Company/Brand Information
```javascript
COMPANY_NAME: "WASI TECH",        // Your company name
BRAND_NAME: "WASI MD",            // Your brand name
AUTHOR: "WasiTech",               // Author name
CREATOR_NAME: "Mr Wasi Dev",      // Creator display name
```

### 2. Contact Information
```javascript
PHONE_NUMBER: "923192173398",                    // WhatsApp number (with country code, no +)
PHONE_NUMBER_WITH_MSG: "THZ3I25BYZM2E1",        // WhatsApp message link ID
```

### 3. Social Media Links
```javascript
YOUTUBE_CHANNEL: "youtube.com/@wasitech1",       // Your YouTube channel
INSTAGRAM: "instagram.com/itx_mee_wasi",         // Your Instagram profile
GITHUB_USERNAME: "Itxxwasi",                      // Your GitHub username
```

### 4. WhatsApp Links
```javascript
WHATSAPP_GROUP: "https://chat.whatsapp.com/...",        // Your WhatsApp group invite link
WHATSAPP_CHANNEL: "https://whatsapp.com/channel/...",   // Your WhatsApp channel link
```

### 5. Repository Links
```javascript
BOT_REPO: "https://github.com/Itxxwasi/WASI-MD-V",           // Your bot repository
PLUGINS_REPO: "https://github.com/wasixd/WASI-MD-PLUGINS",   // Your plugins repository
SESSION_REPO: "https://github.com/Itxxwasi/SESSION-GENERATOR", // This session generator repo
```

### 6. UI Customization
```javascript
MAIN_PAGE_TITLE: "WASI TECH BOT",              // Main page title
PAIR_PAGE_TITLE: "Pair Code",                   // Pair code page title
PAIRING_HEADER: "WASITECH PAIRING CODE",        // Pairing page header
PAIRING_SUBHEADER: "Made By WASI TECH🔥.",      // Pairing page subheader
PAIRING_INSTRUCTIONS: "Enter Your Number with Country Code.",  // Instructions text
```

### 7. Success Messages
You can customize the messages sent to users after successful pairing:

```javascript
PAIRING_SUCCESS_MESSAGE: `Your custom message here...`
QR_SUCCESS_MESSAGE: `Your custom message here...`
```

## 🚀 How It Works

1. **Backend Configuration**: The Node.js server reads `config.js` and uses it throughout the application
2. **Frontend Configuration**: HTML pages fetch configuration from `/config` endpoint and update the UI dynamically
3. **Centralized Management**: All settings are in one place - no need to edit multiple files!

## 📝 Example: Complete Customization

Here's an example of customizing for "TechCorp":

```javascript
module.exports = {
    // Company Information
    COMPANY_NAME: "TechCorp",
    BRAND_NAME: "TechBot MD",
    AUTHOR: "TechCorp Team",
    CREATOR_NAME: "John Doe",
    
    // Contact
    PHONE_NUMBER: "1234567890",
    PHONE_NUMBER_WITH_MSG: "ABC123XYZ",
    
    // Social Media
    YOUTUBE_CHANNEL: "youtube.com/@techcorp",
    INSTAGRAM: "instagram.com/techcorp",
    GITHUB_USERNAME: "techcorp",
    
    // WhatsApp
    WHATSAPP_GROUP: "https://chat.whatsapp.com/YOUR_GROUP_LINK",
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/YOUR_CHANNEL",
    
    // Repositories
    BOT_REPO: "https://github.com/techcorp/bot",
    PLUGINS_REPO: "https://github.com/techcorp/plugins",
    
    // UI
    MAIN_PAGE_TITLE: "TechBot Session Generator",
    PAIR_PAGE_TITLE: "Get Your Pair Code",
    PAIRING_HEADER: "TECHBOT PAIRING",
    PAIRING_SUBHEADER: "Made By TechCorp 💻",
    PAIRING_INSTRUCTIONS: "Enter your WhatsApp number to continue",
    
    // ... rest of config
};
```

## 🎯 What Gets Updated

When you edit `config.js`, the following elements automatically update:

### Main Page (wasipage.html)
- ✅ Page title
- ✅ Creator name display
- ✅ Bot repository link
- ✅ Plugins repository link
- ✅ Contact WhatsApp link
- ✅ WhatsApp group link
- ✅ WhatsApp channel link
- ✅ Instagram link
- ✅ YouTube link

### Pair Code Page (pair.html)
- ✅ Page title
- ✅ Header text
- ✅ Subheader (company name)
- ✅ Instructions text
- ✅ Phone number placeholder

### Backend Messages
- ✅ Success message sent via WhatsApp after pairing
- ✅ Success message sent via WhatsApp after QR scan
- ✅ All embedded links in messages

## 🔄 Applying Changes

1. Edit `config.js` with your details
2. Save the file
3. Restart the server:
   ```bash
   npm start
   ```
4. Your changes are now live!

## ⚠️ Important Notes

- **Phone Numbers**: Enter without the `+` symbol (e.g., `923192173398` not `+923192173398`)
- **Social Media**: Can include or exclude `https://` - both work
- **WhatsApp Links**: Must include full URLs
- **Messages**: Can use markdown formatting in success messages

## 🐛 Troubleshooting

**Changes not appearing?**
- Clear your browser cache
- Do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Restart the Node.js server

**Config endpoint not working?**
- Make sure `config.js` is in the root directory
- Check for syntax errors in `config.js`
- Verify the server started without errors

## 📞 Need Help?

If you need assistance with customization, please check:
1. The `config.js` file for syntax errors
2. The browser console for JavaScript errors
3. The server logs for backend errors

## 🎉 That's It!

You now have a fully customizable session generator. Edit `config.js` anytime to update your branding!
