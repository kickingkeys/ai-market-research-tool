# 🎯 How to Research Different Industries

**Learn how to customize the AI tool to research any market you want!**

## Quick Method (30 seconds)

1. **Open `main.js`** in any text editor
2. **Find the `RESEARCH_TOPIC` section** (around line 10)
3. **Change the values** to your desired industry
4. **Save the file** 
5. **Run `npm start`** again

## Step-by-Step Guide

### Step 1: Open the Main File

**Open `main.js` using any of these:**
- **Notepad** (Windows)
- **TextEdit** (Mac) 
- **Visual Studio Code** (recommended for programming)
- **Any text editor**

### Step 2: Find the Research Configuration

Look for this section at the top of the file:

```javascript
const RESEARCH_TOPIC = {
  industry: "elderly care",
  region: "United States",
  timeframe: "2024-2025",
  focusAreas: [
    "market size and growth projections",
    "key players and market share",
    "consumer demographics and trends",
    "technology adoption in elderly care",
    "regulatory environment and challenges"
  ]
};
```

### Step 3: Customize Your Research

Change the values to research what you want:

```javascript
const RESEARCH_TOPIC = {
  industry: "electric vehicles",        // ← Your industry here
  region: "Europe",                    // ← Your region here  
  timeframe: "2024-2026",             // ← Your time period
  focusAreas: [
    "market size and growth projections",
    "major manufacturers and market share",
    "consumer adoption trends",
    "charging infrastructure development", // ← Customize these
    "government policies and incentives"   // ← for your industry
  ]
};
```

## 🌍 Popular Industry & Region Combinations

### Technology Industries
```javascript
// Artificial Intelligence
industry: "artificial intelligence in healthcare"
region: "North America"

// E-commerce  
industry: "e-commerce and online retail"
region: "Southeast Asia"

// Fintech
industry: "digital banking and fintech"
region: "Europe"
```

### Energy & Environment
```javascript
// Renewable Energy
industry: "solar energy"
region: "India"

// Electric Vehicles
industry: "electric vehicles"
region: "China" 

// Sustainable Fashion
industry: "sustainable fashion"
region: "United States"
```

### Consumer Markets
```javascript
// Food & Beverage
industry: "plant-based food"
region: "Global"

// Entertainment
industry: "streaming services"
region: "Latin America"

// Travel
industry: "eco-tourism"
region: "Europe"
```

### Healthcare & Life Sciences
```javascript
// Digital Health
industry: "telemedicine"
region: "United States"

// Medical Devices
industry: "wearable medical devices"
region: "Asia Pacific"

// Pharmaceuticals
industry: "personalized medicine"
region: "Global"
```

## 🔍 Customizing Focus Areas

Make your research more specific by changing the `focusAreas`:

### For Technology Industries:
```javascript
focusAreas: [
  "market size and growth projections",
  "key technology players and market share",
  "adoption rates and user demographics", 
  "technological innovations and trends",
  "regulatory challenges and opportunities"
]
```

### For Consumer Markets:
```javascript
focusAreas: [
  "market size and consumer spending",
  "brand leaders and competitive landscape",
  "consumer behavior and preferences",
  "distribution channels and retail trends",
  "marketing strategies and brand positioning"
]
```

### For Healthcare Industries:
```javascript
focusAreas: [
  "market size and healthcare spending",
  "key healthcare providers and market share",
  "patient demographics and treatment trends",
  "medical technology adoption",
  "healthcare policies and reimbursement"
]
```

### For Financial Services:
```javascript
focusAreas: [
  "market size and transaction volumes",
  "major financial institutions and fintech players",
  "consumer adoption and usage patterns",
  "regulatory environment and compliance",
  "technological innovations and digital transformation"
]
```

## 📊 Sample Research Topics for Business Students

### Business School Assignments
```javascript
// Strategy Course
industry: "subscription economy"
region: "Global"

// Marketing Course  
industry: "social media marketing platforms"
region: "North America"

// Operations Course
industry: "supply chain automation"
region: "Asia Pacific"

// Entrepreneurship Course
industry: "startup ecosystem"
region: "Europe"
```

### Case Study Research
```javascript
// Disruption Analysis
industry: "autonomous vehicles"
region: "United States"

// International Business
industry: "cross-border e-commerce"
region: "Global"

// Sustainability Focus
industry: "circular economy solutions"
region: "Europe"
```

## ⏰ Time Periods

Choose the right timeframe for your research:

```javascript
// Recent past + present
timeframe: "2022-2024"

// Current + near future (most common)
timeframe: "2024-2025"

// Future projections
timeframe: "2025-2027"

// Longer strategic view
timeframe: "2024-2030"
```

## 💡 Pro Tips for Better Research

### 1. Be Specific
❌ `industry: "technology"`  
✅ `industry: "artificial intelligence in retail"`

### 2. Match Region to Industry
❌ `industry: "rice farming"` + `region: "Antarctica"`  
✅ `industry: "rice farming"` + `region: "Southeast Asia"`

### 3. Use Business Language
❌ `industry: "computer stuff"`  
✅ `industry: "cloud computing services"`

### 4. Focus Your Research Areas
Instead of generic areas, use industry-specific focus areas that matter to your research goals.

## 🔄 Testing Your Changes

After making changes:

1. **Save the file** (Ctrl+S / Cmd+S)
2. **Run the tool**: `npm start`
3. **Check the output** - it should show your new industry/region
4. **Wait for the report** (2-3 minutes)

## 📈 Advanced Customization

### Multi-Industry Research
```javascript
industry: "fintech and traditional banking convergence"
region: "United States"
```

### Cross-Regional Analysis  
```javascript
industry: "renewable energy adoption"
region: "United States vs Europe"
```

### Emerging Markets Focus
```javascript
industry: "mobile payment systems"
region: "Sub-Saharan Africa"
```

## 🆘 Common Issues

**Problem**: Report seems generic  
**Solution**: Make your industry and focus areas more specific

**Problem**: No data found  
**Solution**: Try a broader industry term or different region

**Problem**: Too much data  
**Solution**: Make your industry more specific or focus on fewer areas

**Problem**: Report not relevant to your assignment  
**Solution**: Adjust focus areas to match your assignment requirements

## 📝 Example: Complete Customization

Let's say you're researching sustainable packaging for a marketing class:

```javascript
const RESEARCH_TOPIC = {
  industry: "sustainable packaging solutions",
  region: "United States",
  timeframe: "2024-2025", 
  focusAreas: [
    "market size and growth in sustainable packaging",
    "leading sustainable packaging companies",
    "consumer attitudes toward eco-friendly packaging",
    "retail adoption of sustainable packaging",
    "regulations and environmental policies"
  ]
};
```

This will give you a focused report perfect for understanding the market dynamics, key players, and consumer trends in sustainable packaging.

## 🎓 Using Reports for Different Purposes

### For Class Presentations:
- Focus on market size, trends, and key players
- Include competitive landscape
- Emphasize growth opportunities

### For Case Studies:
- Research specific companies in the industry
- Focus on business models and strategies
- Include regulatory challenges

### For Business Plans:
- Emphasize market opportunity
- Focus on customer segments
- Include competitive analysis

---

**Ready to customize your research?** Edit `main.js` and run `npm start` to generate your custom report!