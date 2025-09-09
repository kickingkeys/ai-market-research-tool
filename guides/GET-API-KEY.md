# 🔑 How to Get Your Free Google AI Key

**This guide shows you how to get free access to Google's AI for market research.**

## What is an API Key?

An API key is like a **password** that lets the market research tool connect to Google's AI. Think of it as:
- 🆔 **Your ID card** to access Google's AI services
- 🔐 **A secure way** for the tool to use Google's research capabilities  
- 💰 **Free to get** and includes generous usage limits

## Step-by-Step Instructions

### Step 1: Go to Google AI Studio
1. **Open your web browser**
2. **Go to**: https://aistudio.google.com/prompts/new_chat
3. **Sign in** with your Google account

> 💡 **Don't have a Google account?** Create one for free at https://accounts.google.com/

### Step 2: Create Your API Key
1. **Look for the API key icon** (🔑) in the left sidebar or top toolbar
2. **Click "Get API Key" or "Create API Key"**
3. **Choose "Create API key in new project"** (recommended for first-time users)
4. **Wait a few seconds** while Google creates your key

### Step 3: Copy Your Key
1. **Your new API key will appear** (it looks like: `AIzaSyB...`)
2. **Click the copy button** 📋 next to your key
3. **Save it somewhere safe** - you'll need it every time you use the tool!

> ⚠️ **Important**: Treat your API key like a password - don't share it publicly!

## Visual Guide

```
┌─────────────────────────────────────────┐
│  Google AI Studio                       │
├─────────────────────────────────────────┤
│                                         │
│  [🔵 Create API Key]                    │
│                                         │
│  Your API Keys:                         │
│  ┌─────────────────────────────────────┐│
│  │ AIzaSyB1234567890abcdef...      📋 ││  ← Click to copy
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

## Step 4: Set Up the Key on Your Computer

Once you have your key, you need to tell your computer about it:

### On Mac or Linux:
1. **Open Terminal**
2. **Type this command** (replace `YOUR_KEY_HERE` with your actual key):
   ```bash
   export GOOGLE_GENERATIVE_AI_API_KEY="YOUR_KEY_HERE"
   ```

### On Windows:
1. **Open Command Prompt**
2. **Type this command** (replace `YOUR_KEY_HERE` with your actual key):
   ```cmd
   set GOOGLE_GENERATIVE_AI_API_KEY=YOUR_KEY_HERE
   ```

### Example:
If your key is `AIzaSyB1234567890abcdef`, you would type:
```bash
export GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyB1234567890abcdef"
```

## ✅ Test Your Key

To make sure everything works:

1. **Navigate to your tool folder**:
   ```bash
   cd path/to/ai-market-research-tool
   ```

2. **Run the tool**:
   ```bash
   npm start
   ```

3. **You should see**:
   ```
   🔍 Starting AI Market Research Tool...
   📊 Researching: elderly care market in United States
   ```

## 💰 Usage Limits (Free Tier)

Google gives you **generous free usage**:
- **15 requests per minute**
- **1,500 requests per day**  
- **1 million tokens per minute**

This is **plenty for business students**:
- ✅ Generate 10-20 market research reports per day
- ✅ Research multiple industries  
- ✅ Use for all your class projects

## 🔐 Keeping Your Key Secure

**DO:**
- ✅ Save your key in a secure place
- ✅ Only use it on your own computer
- ✅ Set it as an environment variable

**DON'T:**
- ❌ Share your key with others
- ❌ Put it in emails or messages
- ❌ Upload it to public websites
- ❌ Include it in screenshots

## 🆘 Troubleshooting

### Problem: "API key not found"
**Solution**: Make sure you set the environment variable correctly

### Problem: "Invalid API key"  
**Solution**: Double-check you copied the entire key (it's quite long!)

### Problem: "Quota exceeded"
**Solution**: You've used your daily limit. Wait until tomorrow or create a new project.

### Problem: "API key expired"
**Solution**: Go back to Google AI Studio and create a new key.

## 🔄 Setting Your Key Permanently (Optional)

If you don't want to set your key every time:

### On Mac:
1. **Open Terminal**
2. **Edit your profile**:
   ```bash
   echo 'export GOOGLE_GENERATIVE_AI_API_KEY="YOUR_KEY_HERE"' >> ~/.zshrc
   ```
3. **Restart Terminal**

### On Windows:
1. **Search for "Environment Variables"** in Start Menu
2. **Click "Edit the system environment variables"**
3. **Click "Environment Variables..."**
4. **Click "New..." under User variables**
5. **Variable name**: `GOOGLE_GENERATIVE_AI_API_KEY`
6. **Variable value**: Your API key
7. **Click OK**
8. **Restart Command Prompt**

## 🎯 What's Next?

Once you have your API key set up:
1. **Generate your first report** with `npm start`
2. **Try different industries** by editing the research topic
3. **Use the reports** for business presentations and assignments

## 📞 Need More Help?

- **Can't find the website?** → Try https://ai.google.dev/ instead
- **Forgot your key?** → Go back to Google AI Studio to find it
- **Still having issues?** → Check [HELP.md](HELP.md) for more troubleshooting

---

**Ready to start researching?** → Go back to [QUICK-START.md](../QUICK-START.md) to generate your first report!