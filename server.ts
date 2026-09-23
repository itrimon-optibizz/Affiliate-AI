import express from 'express';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI Product Analysis
app.post('/api/ai/analyze-product', async (req, res) => {
  try {
    const { product } = req.body;
    
    const prompt = `
      Analyze the following product for affiliate marketing potential in the US market:
      Product: ${product.name}
      Category: ${product.category}
      Description: ${product.description}

      Provide a JSON response with:
      - trendMomentum: (string) Strongly Rising, Rising, Stable, Declining
      - opportunityScore: (number 0-100)
      - reasoning: (string)
      - targetAudience: (string)
      - recommendedAngles: (array of strings)
    `;

    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    });

    let text = result.choices[0].message.content.parts[0].text;
    
    // Extract JSON if model wraps it in markdown
    text = text.replace(/```json\n?/, '').replace(/\n?```/, '');
    
    res.json(JSON.parse(text));
  } catch (error) {
    console.error('AI Analysis Error:', error);
    res.status(500).json({ error: 'Failed to analyze product' });
  }
});

// AI Content Generation
app.post('/api/ai/generate-content', async (req, res) => {
  try {
    const { product, platform, angle } = req.body;

    const prompt = `
      Generate high-converting affiliate marketing content for:
      Product: ${product.name}
      Platform: ${platform}
      Angle: ${angle}

      Provide a JSON response with:
      - title: (string)
      - caption: (string)
      - hook: (string)
      - script: (string, for video)
      - hashtags: (array of strings)
      - cta: (string)
    `;

    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    });

    let text = result.choices[0].message.content.parts[0].text;
    text = text.replace(/```json\n?/, '').replace(/\n?```/, '');
    
    res.json(JSON.parse(text));
  } catch (error) {
    console.error('AI Content Error:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

// Vite middleware for development
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await vite.transformIndexHtml(url, (await import('fs')).readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8'));
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// Static assets and Vite middleware
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
