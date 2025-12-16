# 🎯 Cool Shot Systems - Session Generator Setup Guide

Welcome! This guide will help you complete the setup for your Cool Shot Systems WhatsApp Session Generator.

## ✅ What's Already Done

Your company branding has been configured:
- ✅ Company Name: **Cool Shot Systems**
- ✅ Bot Name: **Cool Shot MD**
- ✅ Author: **Professor**
- ✅ Creator Name: **Professor Heritage Oluwalonimi Oladoye**
- ✅ Page Titles: Updated with Cool Shot branding
- ✅ UI Messages: Customized with your company name

## 📝 What You Need to Complete

To finish the setup, you need to add your actual contact information and links in `config.js`:

### 1. WhatsApp Contact Number

**Current:** `PHONE_NUMBER: "1234567890"`

**Update to:** Your actual WhatsApp number with country code (no + sign)

**Example:**
```javascript
PHONE_NUMBER: "14155551234",  // If your number is +1 (415) 555-1234
```

### 2. WhatsApp Message Link ID

**Current:** `PHONE_NUMBER_WITH_MSG: "YOUR_MESSAGE_ID"`

**How to get:**
1. Go to https://wa.me/
2. Create a message link
3. The ID is the part after `/message/`
4. Example: If link is `https://wa.me/message/ABC123XYZ`, use `ABC123XYZ`

**Update to:**
```javascript
PHONE_NUMBER_WITH_MSG: "YOUR_ACTUAL_MESSAGE_ID",
```

### 3. Social Media Links

**Current:**
```javascript
YOUTUBE_CHANNEL: "youtube.com/@coolshotsystems",
INSTAGRAM: "instagram.com/coolshotsystems",
```

**Update to:** Your actual social media handles (if you have them)

**Example:**
```javascript
YOUTUBE_CHANNEL: "youtube.com/@coolshot",
INSTAGRAM: "instagram.com/coolshotsystems",
```

**Don't have these yet?** No problem! You can:
- Leave them as placeholders
- Remove the buttons from the UI
- Or point them to your website

### 4. WhatsApp Group & Channel Links

**Current:**
```javascript
WHATSAPP_GROUP: "https://chat.whatsapp.com/YOUR_GROUP_LINK",
WHATSAPP_CHANNEL: "https://whatsapp.com/channel/YOUR_CHANNEL",
```

**How to get your WhatsApp Group link:**
1. Open your WhatsApp group
2. Tap group name → "Invite via link"
3. Copy the link

**How to get your WhatsApp Channel link:**
1. Open your WhatsApp channel
2. Tap channel name → "Share channel link"
3. Copy the link

**Update to:**
```javascript
WHATSAPP_GROUP: "https://chat.whatsapp.com/ABCdefGHIjkl123",
WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VaXXXXXXXX",
```

### 5. Bot Repository Links

**Current:**
```javascript
BOT_REPO: "https://github.com/RayBen445/your-bot-repo",
PLUGINS_REPO: "https://github.com/RayBen445/your-plugins-repo",
```

**Update to:** Your actual bot repository URLs (when you create them)

**Example:**
```javascript
BOT_REPO: "https://github.com/RayBen445/coolshot-bot",
PLUGINS_REPO: "https://github.com/RayBen445/coolshot-plugins",
```

## 🚀 Quick Setup Checklist

1. Open `config.js` in a text editor
2. Replace all `TODO:` marked items with your actual information
3. Save the file
4. Test locally: `npm start`
5. Visit http://localhost:8000 to verify
6. Deploy to Render (see RENDER_DEPLOY.md)

## 📋 Example Complete config.js

Here's what your `config.js` might look like when complete:

```javascript
module.exports = {
    // Company/Brand Information
    COMPANY_NAME: "Cool Shot Systems",
    BRAND_NAME: "Cool Shot MD",
    AUTHOR: "Professor",
    CREATOR_NAME: "Professor Heritage Oluwalonimi Oladoye",
    
    // Contact Information
    PHONE_NUMBER: "14155551234",  // ✅ Your real number
    PHONE_NUMBER_WITH_MSG: "ABC123XYZ456",  // ✅ Your message ID
    
    // Social Media Links
    YOUTUBE_CHANNEL: "youtube.com/@coolshot",  // ✅ Your channel
    INSTAGRAM: "instagram.com/coolshotsystems",  // ✅ Your Instagram
    GITHUB_USERNAME: "RayBen445",
    
    // WhatsApp Links
    WHATSAPP_GROUP: "https://chat.whatsapp.com/ABCdef123456",  // ✅ Your group
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VaXXX",  // ✅ Your channel
    
    // Repository Links
    BOT_REPO: "https://github.com/RayBen445/coolshot-bot",  // ✅ Your bot
    PLUGINS_REPO: "https://github.com/RayBen445/coolshot-plugins",  // ✅ Your plugins
    SESSION_REPO: "https://github.com/RayBen445/CSsession",
    
    // Bot Configuration
    BOT_NAME: "Cool Shot MD",
    
    // ... rest stays the same
};
```

## 🧪 Testing Your Configuration

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open in browser
# Visit: http://localhost:8000
```

**Check:**
- ✅ Main page shows "Cool Shot Systems Team"
- ✅ Buttons link to correct URLs
- ✅ Pair code page shows "Cool Shot Systems"
- ✅ All social media links work

## 📤 Deploying to Render

Once your config is complete:

1. **Commit your changes:**
```bash
git add config.js
git commit -m "Complete Cool Shot Systems configuration"
git push
```

2. **Deploy to Render:**
   - Follow the guide in [RENDER_DEPLOY.md](RENDER_DEPLOY.md)
   - Use the one-click deploy button, OR
   - Manual deploy from your GitHub repo

3. **Your URL will be:**
   - `https://your-service-name.onrender.com`
   - Share this with users who need bot sessions!

## 🎨 Optional: Further Customization

Want to customize more? You can also change:

### Colors & Styling
Edit `wasipage.html` and `pair.html` to change colors:
- Button colors: Look for `background: linear-gradient(...)`
- Background: Look for `background: linear-gradient(45deg, ...)`
- Text colors: Look for `color: #...`

### Success Messages
Edit the messages in `config.js`:
- `PAIRING_SUCCESS_MESSAGE` - Sent after pair code auth
- `QR_SUCCESS_MESSAGE` - Sent after QR code auth

Add your own branding, emojis, or support information!

## ❓ Need Help?

**Configuration Questions:**
- Check [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed explanations

**Deployment Issues:**
- See [RENDER_DEPLOY.md](RENDER_DEPLOY.md) for Render-specific help
- See [DEPLOYMENT.md](DEPLOYMENT.md) for other platforms

**Technical Issues:**
- Ensure Node.js 20+ is installed
- Run `npm install` to get dependencies
- Check server logs for errors

## 🎉 You're Ready!

Once you've:
1. ✅ Updated config.js with your information
2. ✅ Tested locally
3. ✅ Deployed to Render

Your Cool Shot Systems Session Generator is live and ready to help users connect their WhatsApp bots!

---

**Questions?** Feel free to check the other documentation files or create an issue on GitHub.

**Cool Shot Systems** - Powered by modern technology 🚀
