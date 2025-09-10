# 🆘 Help & Troubleshooting

## Quick Fixes

### "I'm scared of the terminal!"
→ Download [Warp Terminal](https://www.warp.dev/terminal) - it has AI that helps you with commands!

### "Command not found: npm"
→ Install Node.js from https://nodejs.org (download LTS version)

### "API key not found"
1. Get key from https://aistudio.google.com/prompts/new_chat
2. Edit `.env` file: `GOOGLE_GENERATIVE_AI_API_KEY=your_key_here`

### "Permission denied"
→ Try adding `sudo` before the command (Mac/Linux)

### "Can't find the project folder"
→ Use `cd Desktop/ai-market-research-tool` (or wherever you extracted it)

### "PDF not generated" or "Taking too long"
→ Check internet connection
→ Try reducing depth to "quick" or "standard"  
→ Executive reports take 15-25 minutes - be patient!

## Still Stuck?

**Ask Warp's AI**: Press `Ctrl+Shift+~` and ask "How do I install npm?"

**Open an Issue**: [Report your problem here](../../issues)

## Remember!
1. **Change the research topic** in `main.js` line 17 (or you'll get elderly care research!)
2. **Choose your depth level** in `main.js` line 37 (`quick`, `standard`, `comprehensive`, `executive`)