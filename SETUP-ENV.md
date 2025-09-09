# 🔐 Environment Variable Setup Guide

**Learn how to securely set up your API key without risking it on GitHub!**

## 🚨 Why Environment Variables?

**NEVER put your API key directly in code!** Here's why:

❌ **Bad** (Don't do this):
```javascript
const API_KEY = "AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg"; // DANGEROUS!
```

✅ **Good** (Do this):
```javascript
const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY; // SAFE!
```

**Why environment variables are better:**
- 🔒 **Secure**: Keys stay on your computer, not in code
- 🚫 **No GitHub accidents**: Won't accidentally commit keys to public repos
- 👥 **Team-friendly**: Each person uses their own key
- 🔄 **Easy to change**: Update keys without changing code

## 📋 Setup Methods (Pick One)

### Method 1: .env File (Recommended for Students)

1. **Copy the example file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit .env file** with your real API key:
   ```bash
   # Open .env in any text editor (Notepad, TextEdit, VS Code)
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg
   ```

3. **Install dotenv package** (if not already installed):
   ```bash
   npm install dotenv
   ```

4. **Run the tool**:
   ```bash
   npm start
   ```

✅ **Advantages**: Easy, works across all operating systems, perfect for learning

### Method 2: Terminal Commands (Temporary)

**Mac/Linux:**
```bash
export GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg"
npm start
```

**Windows (Command Prompt):**
```cmd
set GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg
npm start
```

**Windows (PowerShell):**
```powershell
$env:GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg"
npm start
```

✅ **Advantages**: No files to manage, immediate use
❌ **Disadvantages**: Need to set every time you restart terminal

### Method 3: System Environment Variables (Permanent)

#### Mac/Linux (Permanent Setup)
1. **Edit your shell profile**:
   ```bash
   # For zsh (default on new Macs)
   echo 'export GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg"' >> ~/.zshrc
   source ~/.zshrc
   
   # For bash
   echo 'export GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg"' >> ~/.bash_profile
   source ~/.bash_profile
   ```

#### Windows (Permanent Setup)
1. **Search for "Environment Variables"** in Start Menu
2. **Click "Edit the system environment variables"**
3. **Click "Environment Variables..." button**
4. **Under "User variables", click "New..."**
5. **Set**:
   - Variable name: `GOOGLE_GENERATIVE_AI_API_KEY`
   - Variable value: `AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg`
6. **Click OK and restart Command Prompt**

✅ **Advantages**: Set once, works forever
❌ **Disadvantages**: More complex setup

## 🔧 For Developers: Dotenv Setup

If you want to use the `.env` file method, update your main.js file:

```javascript
// Add this at the very top of main.js
require('dotenv').config();

// Now you can use process.env.GOOGLE_GENERATIVE_AI_API_KEY
const { google } = require("@ai-sdk/google");
// ... rest of your code
```

## ✅ Verify Your Setup

Test that your environment variable is working:

```bash
# Mac/Linux/Windows PowerShell
echo $GOOGLE_GENERATIVE_AI_API_KEY

# Windows Command Prompt  
echo %GOOGLE_GENERATIVE_AI_API_KEY%

# Node.js test
node -e "console.log(process.env.GOOGLE_GENERATIVE_AI_API_KEY)"
```

You should see your API key printed (starting with `AIzaSy...`)

## 🔒 Security Best Practices

### ✅ DO:
- **Use environment variables** for all API keys
- **Add .env to .gitignore** (already done in this project)
- **Use different keys** for different projects/environments
- **Regenerate keys** if you think they're compromised
- **Share .env.example** (without real keys) with teammates

### ❌ DON'T:
- **Never commit .env files** to Git/GitHub
- **Never share API keys** in chat/email/screenshots
- **Never hardcode keys** in source code
- **Never use production keys** for testing
- **Never post keys** on forums or Stack Overflow

## 🚨 GitHub Safety

**Before committing code to GitHub:**

1. **Check .gitignore includes**:
   ```
   .env
   .env.local
   .env.production
   .env.development
   ```

2. **Verify no keys in code**:
   ```bash
   # Search for potential API keys
   grep -r "AIzaSy" . --exclude-dir=node_modules
   grep -r "API_KEY" . --exclude-dir=node_modules
   ```

3. **Use git status before committing**:
   ```bash
   git status
   # Make sure .env is NOT listed
   ```

4. **If you accidentally commit a key**:
   - **Regenerate the API key immediately** in Google AI Studio
   - **Remove the key from Git history** (or make repo private)

## 🎓 For Students: Simple Version

**Just want to get started quickly?**

1. **Copy .env.example to .env**:
   ```bash
   cp .env.example .env
   ```

2. **Edit .env file** and put your real API key:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDY-r4mqjlAkhKu-ZNpRnjQfLHOsluSkMg
   ```

3. **Run the tool**:
   ```bash
   npm start
   ```

That's it! The tool will automatically read your key from the .env file.

## 🆘 Troubleshooting

**Problem**: "API key not found"  
**Solution**: Check that your .env file exists and has the correct variable name

**Problem**: Tool can't read .env file  
**Solution**: Make sure you installed dotenv: `npm install dotenv`

**Problem**: Key doesn't work  
**Solution**: Verify your key is correct - regenerate if needed

**Problem**: Works in development but not when deployed  
**Solution**: Set environment variables on your hosting platform

---

**Ready to set up your environment?** Choose the method that works best for you and keep your API keys secure! 🔐