# 🚀 5-Minute Quick Start Guide

**Get your first AI market research report in 5 minutes!**

## Step 1: Download the Tool (30 seconds)

### Option A: From GitHub (Recommended)
1. Go to the GitHub repository
2. Click the green **"Code"** button  
3. Click **"Download ZIP"**
4. Extract the ZIP file to your Desktop or Documents folder

### Option B: Using Git (If you have it installed)
```bash
git clone [REPOSITORY-URL]
cd ai-market-research-tool
```

## Step 2: Get Your Free Google AI Key (2 minutes)

1. **Go to Google AI Studio**: https://aistudio.google.com/prompts/new_chat
2. **Sign in** with your Google account (or create one)
3. **Look for the API key icon** (🔑) and click "Get API Key"
4. **Create a new API key** and copy it (looks like: `AIzaSy...`)

> 💡 **Tip**: Save this key somewhere safe - you'll need it every time you use the tool!

## Step 3: Install Node.js (2 minutes - if not already installed)

1. **Check if you already have it**: Open Terminal/Command Prompt and type:
   ```bash
   node --version
   ```
   
2. **If you see a version number** (like v18.0.0), skip to Step 4!

3. **If you don't have it**: 
   - Go to https://nodejs.org/
   - Download the **LTS version** (recommended for most users)
   - Install it (just click "Next" through the installer)

## Step 4: Set Up the Tool (1 minute)

1. **Open Terminal/Command Prompt**:

   > 🤖 **New to terminals?** We recommend [Warp Terminal](https://www.warp.dev/terminal) - it has built-in AI that helps you with commands! Download it first, then come back here. See [TERMINAL-SETUP.md](TERMINAL-SETUP.md) for full setup guide.
   
   **Other options**:
   - **Mac**: Press `Cmd + Space`, type "Terminal"
   - **Windows**: Press `Win + R`, type "cmd" 
   - **Linux**: Press `Ctrl + Alt + T`

2. **Navigate to the tool folder**:
   ```bash
   cd Desktop/ai-market-research-tool
   # (or wherever you extracted the files)
   ```

3. **Install the tool**:
   ```bash
   npm install
   ```
   
   > ⏳ This downloads all the AI libraries (about 1 minute)

4. **Set your AI key securely**:

   ```bash
   # Copy the example environment file
   cp .env.example .env
   ```
   
   **Then edit the .env file** (use Notepad, TextEdit, or any text editor):
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg
   ```
   
   > 🔐 **Why .env files?** This keeps your API key safe and prevents accidentally sharing it on GitHub!

## Step 5: Generate Your First Report! (2-3 minutes)

```bash
npm start
```

You'll see:
```
🔍 Starting AI Market Research Tool...
📊 Researching: elderly care market in United States
⏳ This may take 2-3 minutes...

🌐 Step 1: Gathering market intelligence with AI...
✅ Market research completed!
📈 Step 2: Processing data for visualizations...
✅ Generated 3 charts for visualization!
📄 Step 3: Creating professional business report...
🖨️  Step 4: Converting to PDF...

🎉 SUCCESS! Your market research report is ready!
📁 Report saved as: elderly-care-market-research-2024-12-09.pdf
```

## 🎯 Your First Report

The tool generates a **professional PDF report** with:
- Executive summary
- Market size and growth data  
- Key competitors and market share
- Professional charts and graphs
- Business recommendations
- Data sources

## 🔄 Generate More Reports

**Want to research a different industry?**

1. **Open `main.js`** in any text editor (Notepad, TextEdit, VS Code, etc.)

2. **Find this section at the top:**
   ```javascript
   const RESEARCH_TOPIC = {
     industry: "elderly care",
     region: "United States",
     timeframe: "2024-2025",
     // ...
   ```

3. **Change the industry**:
   ```javascript
   const RESEARCH_TOPIC = {
     industry: "electric vehicles",     // ← Change this!
     region: "Europe",                 // ← And this!
     timeframe: "2024-2025",
     // ...
   ```

4. **Save the file and run again**:
   ```bash
   npm start
   ```

## 💡 Popular Research Topics for Business Students

Try researching these industries:
- **Technology**: "artificial intelligence", "e-commerce", "fintech"
- **Energy**: "renewable energy", "electric vehicles", "solar power"  
- **Healthcare**: "telemedicine", "digital health", "medical devices"
- **Consumer**: "sustainable fashion", "food delivery", "streaming services"
- **Finance**: "cryptocurrency", "mobile payments", "robo-advisors"

## 🆘 Need Help?

**Common Issues:**

❌ **"Command not found: npm"**  
→ You need to install Node.js first (see Step 3)

❌ **"API key not found"**  
→ Make sure you set the `GOOGLE_GENERATIVE_AI_API_KEY` (see Step 4)

❌ **Permission errors**  
→ Try running with `sudo npm install` (Mac/Linux) or run as Administrator (Windows)

❌ **Internet connection errors**  
→ Check your WiFi connection - the AI needs internet to research

**Still stuck?** Check [guides/HELP.md](guides/HELP.md) for detailed troubleshooting!

---

## 🎉 You're Ready!

**Congratulations!** You now have a powerful AI market research tool that can:

✅ Research any industry in minutes  
✅ Generate professional reports with charts  
✅ Provide real market data and analysis  
✅ Create content for presentations and assignments  

**Next Steps:**
- Explore different industries and regions
- Use the reports for class projects
- Share findings in business presentations
- Analyze markets for case studies

**Happy researching!** 🚀