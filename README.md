# 🤖 AI Market Research Tool

**Generate professional market research reports in 3 minutes using AI.**

**📄 See example**: [Sample elderly care market report](elderly-care-market-research-2025-09-09T23-19-17.pdf) (generated in 3 minutes)

## 🚀 Quick Setup

### 1. Download
Click **"Code" → "Download ZIP"** → Extract to Desktop

### 2. Get AI Key (Free)
1. Go to: https://aistudio.google.com/prompts/new_chat
2. Sign in with Google
3. Click API key icon (🔑) → "Get API Key"
4. Copy your key

### 3. Setup
Open Terminal ([Warp recommended](https://www.warp.dev/terminal) - has AI help)

```bash
cd ai-market-research-tool
npm install
cp .env.example .env
```

Edit `.env` file and add your API key:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

### 4. Run
```bash
npm start
```

**That's it!** You'll get a PDF report in 2-3 minutes.

## ⚠️ IMPORTANT: Change Your Research Topic

**By default, this researches "elderly care" - you probably want something else!**

1. Open `main.js` in any text editor
2. Find line 17 and change:

```javascript
const RESEARCH_TOPIC = {
  industry: "electric vehicles",        // ← CHANGE THIS
  region: "North America",             // ← AND THIS
  timeframe: "2024-2025",
  focusAreas: [
    "market adoption rates",           // ← CUSTOMIZE THESE
    "charging infrastructure",
    "government incentives"
  ]
};
```

3. Run `npm start` again

## 📊 What You Get

- Executive summary
- Market size and growth
- Professional charts
- Competitor analysis
- Business recommendations
- PDF ready for presentations

## 🆘 Need Help?

**Terminal scared?** → Download [Warp](https://www.warp.dev/terminal) - ask its AI for help!

**Common issues:**
- `npm command not found` → Install Node.js from https://nodejs.org
- `API key error` → Check your `.env` file has the right key

**Still stuck?** → [Open an issue](../../issues)

---

**Remember:** Change the research topic in `main.js` line 17 or you'll get elderly care research!