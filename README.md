# 🤖 AI Market Research Tool for Business Students

**Generate professional market research reports in minutes using AI!**

This tool uses Google's advanced AI to research any industry, create data visualizations, and produce business-quality PDF reports that you can use for:

- 📊 **Business presentations**
- 📈 **Case study analysis** 
- 💼 **Investment research**
- 🎯 **Strategic planning**
- 📝 **Class assignments**

## 🚀 Quick Start (5 Minutes)

### 1. Download This Tool
```bash
# Option A: Download from GitHub (recommended)
git clone [YOUR-GITHUB-URL]
cd ai-market-research-tool

# Option B: Download ZIP file and extract it
```

### 2. Get Your Free AI Access
- Go to [Google AI Studio](https://aistudio.google.com/prompts/new_chat)
- Click the API key icon or go to "Get API Key"
- Create and copy your key (it looks like: `AIzaSy...`)

### 3. Set Up Your Computer
```bash
# Install the required software
npm install

# Set your AI key securely (IMPORTANT: Don't put it in code!)
# Copy the example environment file:
cp .env.example .env

# Then edit .env file and add your real API key:
# GOOGLE_GENERATIVE_AI_API_KEY=your_actual_key_here
```

> 🔐 **Security Note**: We use environment variables to keep your API key safe and prevent accidentally sharing it on GitHub. See [SETUP-ENV.md](SETUP-ENV.md) for detailed setup instructions.

### 4. Generate Your First Report
```bash
npm start
```

**That's it!** In 2-3 minutes, you'll have a professional PDF report about the elderly care market.

## 📋 What You Get

Each report includes:

✅ **Executive Summary** - Key findings at a glance  
✅ **Market Overview** - Industry size, growth, trends  
✅ **Professional Charts** - Data visualizations  
✅ **Competitive Analysis** - Key players and market share  
✅ **Growth Opportunities** - Future trends and opportunities  
✅ **Business Recommendations** - Actionable insights  
✅ **Data Sources** - Research citations  

## 🎯 How to Research Different Industries

1. Open `main.js` in any text editor
2. Find the `RESEARCH_TOPIC` section at the top
3. Change the industry, region, and focus areas
4. Run `npm start` again

**Example Industries to Try:**
- Electric vehicles
- Renewable energy  
- E-commerce
- Healthcare technology
- Food delivery
- Remote work software
- Cryptocurrency
- Sustainable fashion

## 📚 Complete Setup Guide

For detailed step-by-step instructions, see:
- [QUICK-START.md](QUICK-START.md) - 5-minute setup guide
- [TERMINAL-SETUP.md](TERMINAL-SETUP.md) - **Terminal setup with AI assistance** (recommended for beginners!)
- [SETUP-ENV.md](SETUP-ENV.md) - **Secure API key setup** (prevents GitHub accidents!)
- [guides/GET-API-KEY.md](guides/GET-API-KEY.md) - How to get your free Google AI key
- [guides/CHANGE-TOPIC.md](guides/CHANGE-TOPIC.md) - How to research different industries
- [guides/HELP.md](guides/HELP.md) - Troubleshooting common issues

## 🎓 Educational Value

This tool teaches you:
- **How AI can accelerate business research**
- **Professional report writing structure**
- **Data visualization best practices**
- **Market analysis methodologies**
- **How to use AI tools in business contexts**

## 💻 System Requirements

- **Node.js** (version 18 or later) - [Download here](https://nodejs.org/)
- **Terminal/Command Line** - We recommend [Warp Terminal](https://www.warp.dev/terminal) with AI assistance!
- **Internet connection** (for AI research)
- **Any computer** (Windows, Mac, Linux)

> 🤖 **New to command line?** Try [Warp Terminal](https://www.warp.dev/terminal) - it has built-in AI that helps you with commands! See our [TERMINAL-SETUP.md](TERMINAL-SETUP.md) guide.

## 🛠️ Business Applications

### For Students
- **Case Study Analysis**: Research industries for business case studies
- **Presentation Support**: Get data and charts for class presentations  
- **Assignment Research**: Comprehensive industry analysis for papers
- **Interview Prep**: Research industries before job interviews

### For Professionals  
- **Market Entry**: Analyze new markets before expansion
- **Competitive Intelligence**: Monitor competitor landscapes
- **Investment Research**: Due diligence on industry sectors
- **Strategic Planning**: Data-driven business strategy development

## 🎯 Sample Report Topics

Try these research topics:
- Artificial Intelligence in Healthcare
- Sustainable Energy Markets in Europe  
- E-commerce Growth in Southeast Asia
- Electric Vehicle Adoption in North America
- Food Tech Innovation in Urban Markets
- Remote Work Software Trends
- Digital Banking Transformation
- Green Building Technology Market

## 🔧 Troubleshooting

**Common Issues:**
- **"API key not found"** → Set your `GOOGLE_GENERATIVE_AI_API_KEY` environment variable
- **"Permission denied"** → Run `npm install` to install dependencies
- **PDF not generating** → Check your internet connection

For detailed help, see [guides/HELP.md](guides/HELP.md)

## 📞 Support

- 📖 **Documentation**: Check the `guides/` folder
- 🐛 **Issues**: Report problems via GitHub Issues
- 💡 **Ideas**: Suggest new features via GitHub Discussions

## 🔒 Privacy & Security

- Your API key stays on your computer
- All research is done through Google's secure servers
- No data is stored or shared
- Generated reports are saved locally only

---

**Ready to get started?** → See [QUICK-START.md](QUICK-START.md) for detailed setup instructions!

**Questions?** → Check [guides/HELP.md](guides/HELP.md) for troubleshooting help!