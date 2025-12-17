# 🤖 WhatsApp Session Generator

A web-based session generator for WhatsApp bots using the Baileys library. This tool provides an easy-to-use interface for users to connect their WhatsApp accounts to your bot via QR code or pairing code.

## ✨ Features

- 🔐 **Two Authentication Methods**: QR Code and Phone Number Pairing
- ⚡ **Easy Deployment**: Works on Heroku, Render, or any Node.js hosting
- 🎨 **Fully Customizable**: Edit company details, branding, and links in one config file
- 📱 **Mobile Friendly**: Responsive design that works on all devices
- 🔒 **Secure**: Session credentials sent directly to user's WhatsApp

## 🚀 How It Works

This application helps users connect their WhatsApp to bots built with [whiskeysockets/baileys](https://github.com/whiskeysockets/Baileys):

1. **User Visits Your Site**: They access your deployed session generator
2. **Choose Method**: Select either QR Code or Pairing Code method
3. **Authenticate**: 
   - **QR Code**: Scan with WhatsApp (like WhatsApp Web)
   - **Pairing Code**: Enter phone number and receive a code
4. **Receive Session**: Session credentials are sent to their WhatsApp
5. **Deploy Bot**: Use the session to connect their bot

### 🔄 Technical Flow

```
User → Session Generator → Baileys Library → WhatsApp Servers
                ↓
        Session Credentials → User's WhatsApp
```

**This repo generates session IDs for all bots using whiskeysockets/baileys**

## 🎨 Customization - Make It Yours!

**Want to use this with your own company details?** It's super easy!

All customization is done in **ONE FILE**: `config.js`

Simply edit `config.js` to change:
- ✅ Company name and branding
- ✅ Contact information (phone, social media)
- ✅ WhatsApp group and channel links
- ✅ Repository links
- ✅ Success messages
- ✅ UI text and labels

📖 **[Read the Complete Customization Guide →](CUSTOMIZATION.md)**

### Quick Example

```javascript
// config.js
module.exports = {
    COMPANY_NAME: "Your Company",
    PHONE_NUMBER: "1234567890",
    YOUTUBE_CHANNEL: "youtube.com/@yourchannel",
    BOT_REPO: "https://github.com/yourusername/your-bot",
    // ... and more!
};
```

After editing `config.js`, just restart the server and all your branding is updated throughout the app!

## 📦 Installation & Deployment

### Local Installation

```bash
# Clone the repository
git clone https://github.com/RayBen445/CSsession.git
cd CSsession

# Install dependencies
npm install

# Start the server
npm start
```

The server will run on `http://localhost:8000` by default.

### Deploy to Heroku

1. Fork this repository
2. Edit `config.js` with your details (optional - customize first!)
3. Click the button below:

<a href='https://dashboard.heroku.com/new?template=https://github.com/RayBen445/CSsession' target="_blank"><img alt='DEPLOY TO HEROKU' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=heroku&logoColor=white'/></a>

### Deploy to Render

1. Fork this repository
2. Edit `config.js` with your details
3. Create a new Web Service on Render
4. Connect your forked repository
5. Deploy!

## 📁 Project Structure

```
CSsession/
├── config.js           # ⭐ Main configuration file (edit this!)
├── itxxwasi.js         # Main server file
├── pair.js             # Pairing code logic
├── wasiqr.js           # QR code logic
├── pair.html           # Pairing code page
├── wasipage.html       # Main landing page
├── package.json        # Dependencies
├── README.md           # This file
└── CUSTOMIZATION.md    # Detailed customization guide
```

## 🔧 Configuration Options

The `config.js` file contains all customizable options:

| Category | Options |
|----------|---------|
| **Branding** | Company name, brand name, creator name |
| **Contact** | Phone number, WhatsApp message ID |
| **Social Media** | YouTube, Instagram, GitHub |
| **WhatsApp** | Group link, channel link |
| **Repositories** | Bot repo, plugins repo |
| **UI Text** | Page titles, headers, instructions |
| **Messages** | Success messages sent to users |

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for complete details.

## 🌟 Usage

### For Users

1. Visit your deployed session generator
2. Choose authentication method:
   - **QR Code**: Click "QR Code" button
   - **Pair Code**: Click "Pair Code" button
3. Follow on-screen instructions
4. Receive session credentials in WhatsApp
5. Use the credentials to deploy your bot

### For Developers

After customizing `config.js`:

```bash
# Start the development server
npm start

# Server will be available at http://localhost:8000
```

## 📱 Pages

- **Home Page** (`/`): Landing page with navigation buttons
- **QR Code** (`/wasiqr`): Scan QR code to authenticate
- **Pair Code** (`/pair`): Enter phone number for pairing code
- **Config API** (`/config`): JSON endpoint for configuration (used by frontend)

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **WhatsApp Library**: @whiskeysockets/baileys
- **Frontend**: HTML, CSS, JavaScript
- **QR Generation**: qrcode library
- **Phone Validation**: awesome-phonenumber

## 📄 License

GPL-3.0 License - Feel free to use and modify!

## ⭐ Credits

Original concept by [Wasi Tech](https://github.com/Itxxwasi)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Make improvements
- Submit pull requests

## 📞 Support

- Star ⭐ this repository if you find it useful!
- Fork and customize for your needs
- Share with others who need a session generator

---

Made with ❤️ for the WhatsApp Bot community

