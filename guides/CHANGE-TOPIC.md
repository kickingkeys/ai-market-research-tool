# 🎯 How to Customize Your Research

## 1. Change Research Topic (30 seconds)

1. **Open `main.js`** in any text editor
2. **Find line 17** (the `RESEARCH_TOPIC` section)
3. **Change these values**:

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

## 2. Choose Report Depth (NEW! - 15 seconds)

1. **Find line 37** (the `REPORT_CONFIG` section)
2. **Change the depth**:

```javascript
const REPORT_CONFIG = {
  depth: "comprehensive",  // ← CHANGE THIS
}
```

**Depth Options:**
- **`"quick"`** - 3 sections, 2 charts, 2-3 minutes ⚡
- **`"standard"`** - 4 sections, 3 charts, 4-6 minutes 📊 (recommended)
- **`"comprehensive"`** - 6 sections, 5 charts, 8-12 minutes 📈  
- **`"executive"`** - 8 sections, 8 charts, 15-25 minutes 💼

3. **Save and run**: `npm start`

## Example Topics

**Technology:**
- Electric vehicles
- AI in healthcare  
- Cryptocurrency
- Social media apps

**Business:**
- Food delivery
- Remote work software
- Sustainable fashion
- E-commerce trends

**Markets:**
- North America, Europe, Asia
- Emerging markets
- Urban vs rural

## Focus Areas Ideas

- Market size and growth
- Key competitors
- Consumer trends
- Technology adoption
- Regulatory environment
- Investment opportunities

**That's it!** Change the values, save, and run `npm start` again.