import { google } from "@ai-sdk/google";
import { generateText, generateObject } from "ai";
import { z } from "zod";
import { ChartConfiguration } from "chart.js";
import puppeteer from "puppeteer";

// ============================================================================
// RESEARCH TOPIC CONFIGURATION
// ============================================================================
// Business students: Change this section to research different markets!

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

// ============================================================================
// CHART HELPER FUNCTIONS
// ============================================================================

function createChartConfig({
  labels,
  data, 
  label,
  type,
  colors,
}: {
  labels: string[];
  data: number[];
  label: string;
  type: "bar" | "line";
  colors: string[];
}): ChartConfiguration {
  return {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          borderWidth: 1,
          ...(type === "bar" && { backgroundColor: colors }),
          ...(type === "line" && colors.length > 0 && { borderColor: colors[0] }),
        },
      ],
    },
    options: {
      animation: { duration: 0 }, // Disable animations for static PDF rendering
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: label
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
}

// ============================================================================
// MAIN APPLICATION
// ============================================================================

async function generateMarketResearch() {
  console.log("🔍 Starting AI Market Research Tool...");
  console.log(`📊 Researching: ${RESEARCH_TOPIC.industry} market in ${RESEARCH_TOPIC.region}`);
  console.log("⏳ This may take 2-3 minutes...\n");

  try {
    // Step 1: AI-Powered Market Research
    console.log("🌐 Step 1: Gathering market intelligence with AI...");
    
    const searchPrompt = `Search the web for comprehensive market analysis of the ${RESEARCH_TOPIC.industry} industry in ${RESEARCH_TOPIC.region} for ${RESEARCH_TOPIC.timeframe}.

Focus on finding data about:
${RESEARCH_TOPIC.focusAreas.map(area => `- ${area}`).join('\n')}

I need current statistics, financial data, competitive landscape, and growth trends. Please provide detailed, factual information with specific numbers where available.`;

    const { text: marketTrends } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: searchPrompt + "\n\nPlease provide comprehensive market research based on your knowledge of the industry. Include specific data points, company names, market sizes, and growth projections where available.",
    });

    console.log("✅ Market research completed!");

    // Step 2: Extract Data for Charts
    console.log("📈 Step 2: Processing data for visualizations...");
    
    const { object: chartData } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: z.object({
        chartConfigurations: z
          .array(
            z.object({
              type: z.enum(["bar", "line"]).describe('The type of chart to generate. Use "bar" for comparisons, "line" for trends over time'),
              labels: z.array(z.string()).describe("Chart labels (companies, years, categories, etc.)"),
              data: z.array(z.number()).describe("Numerical data corresponding to each label"),
              label: z.string().describe("Title/description for the chart"),
              colors: z.array(z.string()).describe('Colors for the chart elements, e.g. ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)"]'),
            })
          )
          .min(1)
          .max(4)
          .describe("Generate 2-4 meaningful charts that visualize key aspects of the market data"),
      }),
      prompt: `Analyze the following market research and create 2-4 professional business charts.

Create charts that would be valuable for:
- Business presentations
- Investment analysis  
- Strategic planning
- Competitive analysis

Focus on the most important numerical data and trends from this research:

${marketTrends}

Make sure each chart tells a clear story about the ${RESEARCH_TOPIC.industry} market.`,
    });

    const chartConfigs = chartData.chartConfigurations.map(createChartConfig);
    console.log(`✅ Generated ${chartConfigs.length} charts for visualization!`);

    // Step 3: Generate Professional Report
    console.log("📄 Step 3: Creating professional business report...");
    
    const { text: htmlReport } = await generateText({
      model: google("gemini-2.5-flash"), 
      prompt: `You are a senior business analyst creating a professional market research report.

**Task**: Generate a comprehensive market analysis report in HTML format for business professionals.

**Report Requirements**:
1. Professional business document styling
2. Executive summary at the top
3. Clear section headings and structure
4. Data-driven insights and analysis
5. Charts embedded using Chart.js
6. Source citations at the end
7. Professional formatting suitable for business presentations

**Technical Requirements**:
- Complete HTML document with proper styling
- Include Chart.js from CDN: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
- Each chart needs a unique canvas ID and corresponding JavaScript
- Use business-appropriate color scheme (blues, grays, professional colors)
- Responsive design that works well in PDF format

**Content Structure**:
1. Executive Summary
2. Market Overview
3. Key Findings (with embedded charts)
4. Competitive Landscape
5. Growth Opportunities
6. Conclusions & Recommendations
7. Data Sources

**Chart Implementation**:
For each chart configuration, create:
\`\`\`html
<div class="chart-container">
  <canvas id="chart1" width="800" height="400"></canvas>
</div>
<script>
  new Chart(document.getElementById('chart1'), ${JSON.stringify(chartConfigs[0], null, 2)});
</script>
\`\`\`

**Market Research Data**:
${marketTrends}

**Chart Configurations**:
${JSON.stringify(chartConfigs, null, 2)}

**Data Sources**:
Based on industry knowledge and market analysis

Generate only the complete HTML document - no explanations or markdown formatting.`,
    });

    // Clean up any markdown formatting that might have been added
    const finalHtml = htmlReport
      .replace(/^```html\n/, "")
      .replace(/\n```$/, "")
      .replace(/```html/g, "")
      .replace(/```/g, "");

    console.log("🖨️  Step 4: Converting to PDF...");

    // Generate PDF
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set page size for better PDF formatting
    await page.setViewport({ width: 1200, height: 800 });
    
    await page.setContent(finalHtml, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for charts to render
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const filename = `${RESEARCH_TOPIC.industry.replace(/\s+/g, '-')}-market-research-${timestamp}.pdf`;
    
    await page.pdf({ 
      path: filename,
      format: "A4",
      margin: {
        top: '20px',
        right: '20px', 
        bottom: '20px',
        left: '20px'
      },
      printBackground: true
    });
    
    await browser.close();

    console.log("\n🎉 SUCCESS! Your market research report is ready!");
    console.log(`📁 Report saved as: ${filename}`);
    console.log(`🏢 Industry: ${RESEARCH_TOPIC.industry}`);
    console.log(`🌍 Region: ${RESEARCH_TOPIC.region}`);
    console.log(`📅 Time Period: ${RESEARCH_TOPIC.timeframe}`);
    console.log(`📊 Charts Generated: ${chartConfigs.length}`);
    console.log("\n💡 To research a different industry:");
    console.log("   1. Edit the RESEARCH_TOPIC section at the top of main.ts");
    console.log("   2. Run 'npm start' again");
    console.log("\n🎓 This report can be used for:");
    console.log("   • Business presentations");
    console.log("   • Case study analysis");
    console.log("   • Investment research");
    console.log("   • Strategic planning");

  } catch (error) {
    console.error("\n❌ Error generating market research:", error);
    console.log("\n🔧 Troubleshooting:");
    console.log("   • Make sure you have set your GOOGLE_GENERATIVE_AI_API_KEY");
    console.log("   • Check your internet connection");
    console.log("   • Ensure all dependencies are installed (run 'npm install')");
    console.log("   • See guides/HELP.md for more assistance");
  }
}

// Run the application
if (require.main === module) {
  generateMarketResearch().catch(console.error);
}

export { generateMarketResearch, RESEARCH_TOPIC };