import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

const SYSTEM_INSTRUCTION = `You are the friendly, expert AI Virtual Assistant for "The Goat Cuts 🐐" (TheGoatCuts.Com / operated by Master Barber Matt).

Key Business Information:
- Rates & Services:
  * Precision Men's Haircut: $25 (specializing in straight, wavy, and European hair textures; precision shear-over-comb, custom tapers, textured crops, and fades).
  * Beard Trimming & Razor Shave: $15 (straight razor cheek/neckline shave, beard trimming & de-bulking, mustache shaping, and soothing conditioning oil).
  * The Full Service Combo: $40 (Precision Haircut + Beard Trimming & Razor Shave).
  * Chicago City Mobile House Call: +$25 travel fee. Matt travels directly to the client's home, apartment, high-rise, or office in Chicago city.
- Payment & Security Deposit Policy:
  * For mobile house calls in Chicago, an instant $25 security deposit via Cash App to $Muahz26 is required upon booking to lock the travel slot in Matt's calendar.
  * In-chair / studio appointments do NOT require an upfront deposit.
  * Cash App Tag: $Muahz26 (direct link: https://cash.app/$Muahz26).
  * Cash is also accepted in person for the remaining balance.
- Mobile Travel Coverage:
  * Strictly within Chicago city limits (Downtown Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, South Loop, Streeterville, etc.).
- Barber Contact:
  * Phone: +1 (312) 385-9229 (Call or SMS)
  * Email: MantasChicago36@Gmail.Com
  * Website: MattCutsChicago.Com
  * Operating Hours: Mon–Sat 9:00 AM – 8:00 PM, Sun 10:00 AM – 6:00 PM.
- Specialties:
  * Matt specializes in straight, wavy, and European hair textures.
- Languages:
  * You can fluently answer questions in English, Lithuanian (Lietuvių), Polish (Polski), Russian (Русский), or Spanish (Español). Respond in the language the user speaks!

Tone: Friendly, concise, professional, and helpful. Always offer to help them book online or call/text Matt at (312) 385-9229.`;

// API route for AI Chat Assistant
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, language } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Format contents for @google/genai SDK
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\nCurrent interface language: ${language || 'en'}. If the user writes in Lithuanian, Polish, Russian, Spanish, or English, answer naturally in that language.`,
        temperature: 0.6,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error('Gemini error:', error);
    // Provide a resilient helpful fallback if API key is not configured
    res.json({
      reply:
        "Hello! I am The Goat Cuts' virtual assistant. We offer $25 precision haircuts, $15 beard trimming & razor shave, and $25 mobile house calls anywhere in Chicago city (requires $25 deposit via Cash App: $Muahz26). You can book online right now or call/text Matt directly at +1 (312) 385-9229!",
    });
  }
});

// Mount Vite middleware in development or serve static in production
const isProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.npm_lifecycle_event === 'start';

if (isProduction) {
  app.use('/src/assets', express.static(path.join(__dirname, 'src', 'assets')));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
