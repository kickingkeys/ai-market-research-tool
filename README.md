# 🤖 AI Market Research Tool for Business Students

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![AI Powered](https://img.shields.io/badge/AI%20Powered-Google%20Gemini-orange.svg)](https://ai.google.dev/)

**Generate professional market research reports in minutes using AI!**

Perfect for business students, entrepreneurs, and professionals who need quick, comprehensive market analysis with professional charts and data visualizations.

![Demo](https://via.placeholder.com/800x400/0066cc/ffffff?text=Market+Research+Report+Generated+in+3+Minutes)

## 🚀 What This Tool Does

✅ **Researches any industry** using Google's advanced AI  
✅ **Creates professional charts** and data visualizations  
✅ **Generates PDF reports** ready for presentations  
✅ **No coding required** - just run and customize  
✅ **Business-quality output** for assignments and real work  

### Sample Industries You Can Research:
- 🏥 Healthcare Technology
- 🚗 Electric Vehicles  
- 🏠 Real Estate Tech
- 🍔 Food Delivery
- 💰 Fintech
- 🌱 Sustainable Energy
- 📱 Mobile Gaming
- 🛒 E-commerce

## 📊 What You Get

Each report includes:

- **Executive Summary** - Key findings at a glance
- **Market Overview** - Size, growth, trends
- **Professional Charts** - 3+ data visualizations
- **Competitive Analysis** - Key players and market share
- **Growth Opportunities** - Future trends and opportunities
- **Business Recommendations** - Actionable insights
- **Professional Formatting** - Ready for presentations

## 🏁 Quick Start (5 Minutes)

### Prerequisites

- **Computer**: Windows, Mac, or Linux
- **Internet**: For AI research
- **Google Account**: For free AI access

### Step 1: Download This Repository

Click the green **"Code"** button → **"Download ZIP"** → Extract to your Desktop

### Step 2: Get Terminal Ready

> 🤖 **Recommended for Beginners**: Download [Warp Terminal](https://www.warp.dev/terminal)
> 
> **Why Warp?** It has built-in AI that helps you with commands - like having ChatGPT in your terminal!

**Alternative terminals:**
- **Mac**: Built-in Terminal app
- **Windows**: Command Prompt or PowerShell  
- **Linux**: Your default terminal

**Need help?** See our [Terminal Setup Guide](TERMINAL-SETUP.md)

### Step 3: Install Node.js (if needed)

1. Check if you have it: `node --version`
2. If not, download from: https://nodejs.org/ (LTS version)

### Step 4: Get Your Free Google AI Key

1. Go to: https://aistudio.google.com/prompts/new_chat
2. Sign in with Google account
3. Click the API key icon (🔑) → "Get API Key"
4. Copy your key (starts with `AIzaSy...`)

### Step 5: Set Up the Tool

```bash
# Navigate to the project folder
cd ai-market-research-tool

# Install dependencies  
npm install

# Set up your API key securely
cp .env.example .env
# Then edit .env file and add your real API key
```

### Step 6: Generate Your First Report!

```bash
npm start
```

**That's it!** In 2-3 minutes you'll have a professional PDF report about the elderly care market.

## 🎯 Customization

Want to research a different industry? Easy!

1. Open `main.js` in any text editor
2. Find the `RESEARCH_TOPIC` section (around line 17)
3. Change the values:

```javascript
const RESEARCH_TOPIC = {
  industry: "electric vehicles",        // ← Change this
  region: "North America",             // ← And this  
  timeframe: "2024-2025",
  focusAreas: [
    "market adoption rates",           // ← Customize these
    "charging infrastructure",
    "government incentives",
    "competition from traditional automakers"
  ]
};
```

4. Run `npm start` again for your new report!

## 📚 Documentation

- 📖 **[Quick Start Guide](QUICK-START.md)** - Detailed 5-minute setup
- 💻 **[Terminal Setup](TERMINAL-SETUP.md)** - AI-powered terminal setup (recommended!)
- 🔐 **[Security Setup](SETUP-ENV.md)** - Safe API key management
- 🔑 **[API Key Guide](guides/GET-API-KEY.md)** - How to get Google AI access
- 🎯 **[Customization Guide](guides/CHANGE-TOPIC.md)** - Research different industries
- 🆘 **[Troubleshooting](guides/HELP.md)** - Fix common issues
- 💡 **[Research Ideas](examples/research-ideas.md)** - 50+ topic suggestions
- 💼 **[Business Applications](business-applications.md)** - Real-world use cases

## 🎓 Perfect For

### Students
- **Business School Assignments**: Market analysis for strategy courses
- **Case Study Preparation**: Industry research for presentations  
- **MBA Applications**: Demonstrate business analysis skills
- **Interview Prep**: Research industries before job interviews

### Professionals  
- **Market Entry**: Analyze new markets before expansion
- **Competitive Intelligence**: Monitor industry landscapes
- **Investment Research**: Due diligence on sectors
- **Strategic Planning**: Data-driven business decisions

### Entrepreneurs
- **Business Plan Development**: Market validation and sizing
- **Pitch Deck Creation**: Professional market data and charts
- **Investor Presentations**: Credible industry analysis
- **Market Opportunity Assessment**: Find and validate new markets

## 🛠️ Technical Details

- **AI Engine**: Google Gemini 2.5 Flash
- **Charts**: Chart.js with professional styling
- **PDF Generation**: Puppeteer for high-quality output
- **Security**: Environment variables for API key protection
- **Languages**: JavaScript/Node.js (beginner-friendly)

## 📁 Project Structure

```
ai-market-research-tool/
├── 📖 README.md                    # This file
├── 🚀 QUICK-START.md              # 5-minute setup guide  
├── 💻 TERMINAL-SETUP.md           # AI terminal setup (Warp)
├── 🔐 SETUP-ENV.md                # Secure API key setup
├── ⚙️ main.js                     # Main application (ready to run)
├── 📦 package.json                # Dependencies
├── 🔧 .env.example                # API key template
├── 📊 guides/                     # Detailed setup guides
├── 💡 examples/                   # Research topic ideas
└── 💼 business-applications.md    # Real-world use cases
```

## 🔒 Security & Privacy

✅ **API keys stored securely** in environment variables  
✅ **No data sharing** - all research stays on your computer  
✅ **GitHub protection** - .gitignore prevents key exposure  
✅ **Google's secure servers** - research done through official AI API  

## ❓ Common Questions

### "I'm new to programming - can I use this?"
**Yes!** This tool is designed for business students. No programming knowledge required. Just follow the setup guide and customize the simple text configuration.

### "Is this free to use?"
**Yes!** The tool is free and open-source. Google AI Studio provides generous free usage limits perfect for student projects.

### "What if I get stuck with the terminal?"
**Use Warp!** Download [Warp Terminal](https://www.warp.dev/terminal) and use its built-in AI assistant. You can ask it questions like "How do I install npm?" and it explains everything.

### "Can I use this for commercial projects?"
**Yes!** MIT license allows commercial use. Perfect for consulting projects, business plans, and professional presentations.

## 📞 Support

- 🐛 **Bug Reports**: [Open an issue](../../issues)
- 💡 **Feature Requests**: [Start a discussion](../../discussions)  
- 📖 **Documentation**: Check the [guides/](guides/) folder
- 🆘 **Get Help**: See [Troubleshooting Guide](guides/HELP.md)

## 🤝 Contributing

We welcome contributions! Whether you're a student or professional:

- 🐛 Report bugs and issues
- 📝 Improve documentation  
- 💡 Suggest new features
- 🎯 Add research topic examples
- 🔧 Code improvements

See our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📜 License

MIT License - free for educational and commercial use. See [LICENSE](LICENSE) for details.

## 🌟 Acknowledgments

- **Google AI Studio** - For providing free access to advanced AI
- **Vercel AI SDK** - For making AI integration simple
- **Warp Terminal** - For making command line accessible to everyone
- **Chart.js** - For beautiful data visualizations
- **Business Students Everywhere** - For inspiring this educational tool

---

**Ready to start?** → [Download the tool](../../archive/refs/heads/main.zip) and follow the [Quick Start Guide](QUICK-START.md)!

**Need help?** → Check our [Terminal Setup Guide](TERMINAL-SETUP.md) with AI assistance recommendations!

**Questions?** → See the [Troubleshooting Guide](guides/HELP.md) or [open an issue](../../issues)!

---

*Built with ❤️ for business education and AI-powered research*