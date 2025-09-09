# 🆘 Troubleshooting Guide

**Having issues? This guide will help you fix common problems quickly!**

## 🚨 Quick Fixes

### Problem: "I'm scared of the terminal/command line!"
**What it means**: You're not comfortable with command line interfaces
**Solution**:
1. **Download Warp Terminal**: https://www.warp.dev/terminal
2. **Follow our guide**: [../TERMINAL-SETUP.md](../TERMINAL-SETUP.md)
3. **Use Warp's AI**: Press `Ctrl+Shift+~` (or `Cmd+Shift+~` on Mac) and ask for help!
4. **Example questions**: "How do I install npm packages?" or "What does this error mean?"

> 🤖 Warp's AI is like having ChatGPT built into your terminal - it explains everything in simple terms!

### Problem: "Command not found: npm"
**What it means**: Node.js isn't installed on your computer  
**Solution**:
1. Go to https://nodejs.org/
2. Download and install Node.js (LTS version)
3. Restart your Terminal/Command Prompt
4. Try `npm --version` to confirm it works
5. **With Warp AI**: Ask "How do I install Node.js?" for step-by-step help!

### Problem: "API key not found" or "API key not set"
**What it means**: The tool can't access Google's AI  
**Solution**:
1. Make sure you got your API key from https://aistudio.google.com/prompts/new_chat
2. **Recommended**: Use .env file method:
   - Copy: `cp .env.example .env`
   - Edit .env file with your real key: `GOOGLE_GENERATIVE_AI_API_KEY=your_key_here`
3. **Alternative**: Set environment variable:
   - **Mac/Linux**: `export GOOGLE_GENERATIVE_AI_API_KEY="YOUR_KEY"`
   - **Windows**: `set GOOGLE_GENERATIVE_AI_API_KEY=YOUR_KEY`

> 🔐 **Security tip**: Use .env files to prevent accidentally committing your API key to GitHub!

### Problem: "Permission denied" or "Access denied"
**What it means**: Your computer is blocking the installation  
**Solution**:
- **Mac/Linux**: Try `sudo npm install`
- **Windows**: Run Command Prompt as Administrator
- Or try: `npm install --no-optional`

## 🔧 Installation Issues

### Problem: npm install fails with errors
**Common causes and solutions**:

1. **Network issues**: 
   - Check your internet connection
   - Try: `npm install --registry https://registry.npmjs.org/`

2. **Old Node.js version**:
   - Update to Node.js 18+ from https://nodejs.org/

3. **Cache problems**:
   - Clear cache: `npm cache clean --force`
   - Delete `node_modules` folder and try again

4. **Firewall/proxy issues**:
   - Check your company/school firewall settings
   - Ask your IT department for help

### Problem: Puppeteer installation fails
**What it means**: The PDF generator can't install properly  
**Solutions**:
1. **Skip Chromium download temporarily**:
   ```bash
   PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install
   ```

2. **Manual Chromium install**:
   ```bash
   npx puppeteer browsers install chrome
   ```

3. **Alternative installation**:
   ```bash
   npm install --no-optional
   ```

## 🌐 API and Connection Issues

### Problem: "Request timeout" or "Network error"
**Causes**:
- Slow internet connection
- Firewall blocking requests
- Google AI service temporarily down

**Solutions**:
1. **Check your internet**: Try browsing to google.com
2. **Wait and retry**: Sometimes services are temporarily down
3. **Check firewall**: Allow Node.js through your firewall
4. **Try mobile hotspot**: Rule out network issues

### Problem: "Invalid API key" or "Authentication failed"
**Solutions**:
1. **Double-check your key**: Make sure you copied it completely
2. **Regenerate key**: Create a new key at https://makersuite.google.com/app/apikey
3. **Check quotes**: Your key should be in quotes: `"AIzaSy..."`
4. **Verify key format**: Keys start with `AIzaSy` and are quite long

### Problem: "Quota exceeded" or "Rate limit exceeded"
**What it means**: You've used your daily limit  
**Solutions**:
1. **Wait**: Limits reset daily (Pacific Time)
2. **Create new project**: In Google AI Studio, create a new project
3. **Optimize usage**: Research fewer industries per day

## 🖥️ Platform-Specific Issues

### Windows Issues

**Problem**: PowerShell doesn't recognize commands  
**Solution**: Use Command Prompt instead of PowerShell

**Problem**: "Execution policies" error  
**Solution**: 
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Problem**: Path with spaces causes issues  
**Solution**: Move the tool to a path without spaces (like `C:\tools\ai-market-research-tool`)

### Mac Issues

**Problem**: "Developer cannot be verified" when installing Node.js  
**Solution**: 
1. System Preferences → Security & Privacy
2. Click "Allow Anyway" for Node.js

**Problem**: Permission errors even with sudo  
**Solution**: Fix npm permissions:
```bash
sudo chown -R $(whoami) ~/.npm
```

### Linux Issues

**Problem**: Missing system dependencies  
**Solution** (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install nodejs npm build-essential
```

## 📁 File and Path Issues

### Problem: "Cannot find module" errors
**Solutions**:
1. **Make sure you're in the right directory**:
   ```bash
   ls -la
   # Should show package.json, main.js, etc.
   ```

2. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check file names**: Make sure `main.js` exists and isn't renamed

### Problem: PDF not being created
**Possible causes**:
1. **Puppeteer not installed properly** → Reinstall with `npm install puppeteer`
2. **No write permissions** → Check folder permissions
3. **Anti-virus blocking** → Add tool folder to anti-virus exceptions

## ⚡ Performance Issues

### Problem: Tool runs very slowly
**Solutions**:
1. **Check internet speed**: Slower connections = longer wait times
2. **Close other programs**: Free up computer memory
3. **Research smaller markets**: More specific = faster results
4. **Reduce focus areas**: Fewer areas = less AI processing

### Problem: Charts not appearing in PDF
**Solutions**:
1. **Wait longer**: Add more wait time in the code
2. **Check internet**: Charts need to download Chart.js library
3. **Try simpler data**: Complex data might not render properly

## 🎯 Report Quality Issues

### Problem: Report contains no useful data
**Solutions**:
1. **Be more specific** in your industry description
2. **Try different keywords**: "electric cars" vs "electric vehicles"
3. **Change region**: Some markets have more available data
4. **Adjust time period**: Current periods usually have more data

### Problem: Report is too generic
**Solutions**:
1. **Narrow your focus**: Instead of "technology", try "AI in healthcare"
2. **Customize focus areas**: Make them specific to your industry
3. **Use business terms**: "Market dynamics" vs "stuff that happens"

### Problem: Charts show strange data
**Solutions**:
1. **Regenerate**: Sometimes AI makes mistakes, try again
2. **Check data sources**: Look at the sources section
3. **Adjust focus areas**: More specific areas = better charts

## 🔄 Environment Variables Issues

### Problem: API key not persisting between sessions
**Solution - Make it permanent**:

**Mac/Linux** (add to ~/.zshrc or ~/.bash_profile):
```bash
echo 'export GOOGLE_GENERATIVE_AI_API_KEY="YOUR_KEY"' >> ~/.zshrc
source ~/.zshrc
```

**Windows** (System Environment Variables):
1. Search "Environment Variables" in Start Menu
2. Edit System Environment Variables
3. Add new User Variable:
   - Name: `GOOGLE_GENERATIVE_AI_API_KEY`
   - Value: Your API key

## 📞 Getting More Help

### Self-Help Resources
1. **Check this guide** for your specific error message
2. **Re-read setup guides**: [QUICK-START.md](../QUICK-START.md) and [GET-API-KEY.md](GET-API-KEY.md)
3. **Try basic tests**: `node --version`, `npm --version`

### Community Help
1. **GitHub Issues**: Report bugs and get help from other users
2. **Stack Overflow**: Search for Node.js and npm related issues
3. **Google AI Documentation**: https://ai.google.dev/

### Professional Help
If you're using this for a business class:
1. **Ask your professor** or teaching assistant
2. **Check with your school's IT support**
3. **Work with classmates** who might have solved similar issues

## 🧪 Debug Mode

To get more detailed error information:

1. **Enable verbose logging**:
   ```bash
   npm start --verbose
   ```

2. **Check detailed errors**:
   ```bash
   DEBUG=* npm start
   ```

3. **Test individual components**:
   ```bash
   node -e "console.log('Node.js works!')"
   ```

## ✅ Success Checklist

Before asking for help, make sure you've tried:

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] Dependencies are installed (`npm install` completed successfully)
- [ ] API key is set correctly (check quotes and completeness)
- [ ] Internet connection is working
- [ ] You're in the correct directory (should contain `package.json`)
- [ ] You've tried restarting Terminal/Command Prompt
- [ ] You've checked the error messages for specific clues

## 🎯 Still Stuck?

If you've tried everything above:

1. **Copy the exact error message** (including any codes)
2. **Note your operating system** (Windows 10, macOS 13, Ubuntu 22.04, etc.)
3. **Check Node.js version**: `node --version`
4. **Create a GitHub issue** with this information

**Most issues are quick fixes!** The tool is designed to be simple and reliable for business students.

---

**Need setup help?** → Go back to [QUICK-START.md](../QUICK-START.md)  
**Want to change topics?** → See [CHANGE-TOPIC.md](CHANGE-TOPIC.md)  
**API key issues?** → Check [GET-API-KEY.md](GET-API-KEY.md)