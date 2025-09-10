# 🚀 Quick Start Guide

## Step 1: Download (30 seconds)
- Click green **"Code"** button → **"Download ZIP"**
- Extract to Desktop

## Step 2: Get Google AI Key (2 minutes)
1. Go to: https://aistudio.google.com/prompts/new_chat
2. Sign in with Google
3. Click API key icon (🔑) → "Get API Key"
4. Copy the key

## Step 3: Setup (2 minutes)
**Open Terminal** (download [Warp](https://www.warp.dev/terminal) for AI help)

```bash
cd Desktop/ai-market-research-tool
npm install
cp .env.example .env
```

**Edit .env file** and add your key:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_copied_key_here
```

## Step 4: Run It!
```bash
npm start
```

**Done!** You'll get a PDF report in 2-3 minutes.

## ⚠️ IMPORTANT: Customize Your Research

### Change Research Topic
**Default is "elderly care" - change it!**

1. Open `main.js` 
2. Find line 17
3. Change `industry: "your topic here"`

### Choose Report Depth (NEW!)
**Pick how detailed you want:**

1. Find line 37: `depth: "standard"`
2. Change to: `"quick"`, `"standard"`, `"comprehensive"`, or `"executive"`

**Options:**
- `"quick"` - 2-3 minutes, basic overview
- `"standard"` - 4-6 minutes, balanced detail  
- `"comprehensive"` - 8-12 minutes, detailed analysis
- `"executive"` - 15-25 minutes, full business report

4. Run `npm start` again

## Need Help?
- **Node.js missing?** → Download from https://nodejs.org
- **Terminal confused?** → Use [Warp](https://www.warp.dev/terminal) with AI help
- **Still stuck?** → Ask in [Issues](../../issues)