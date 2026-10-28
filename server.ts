import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { SYSTEM_INSTRUCTION, generateFallbackResponse } from './src/lib/assistantKnowledge';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Server-side Gemini API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Faltan mensajes en la solicitud' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      const latestUserMessage = messages[messages.length - 1]?.text || '';

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback knowledge response if key is placeholder
        const fallback = generateFallbackResponse(latestUserMessage);
        return res.json({ reply: fallback, source: 'knowledge-base' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Prepare conversation contents for Gemini
      const formattedContents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      const geminiPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.4,
        },
      });

      const timeoutPromise = new Promise<{ text: string }>((_, reject) =>
        setTimeout(() => reject(new Error('Gemini API timeout')), 4500)
      );

      const response = await Promise.race([geminiPromise, timeoutPromise]);
      const replyText = response.text || generateFallbackResponse(latestUserMessage);
      return res.json({ reply: replyText, source: 'gemini-3.8-flash' });
    } catch (err: unknown) {
      console.warn('Fallback activated for /api/chat:', (err as Error)?.message || err);
      const latestText = req.body?.messages?.[req.body?.messages?.length - 1]?.text || '';
      const fallback = generateFallbackResponse(latestText);
      return res.json({ reply: fallback, source: 'knowledge-base' });
    }
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`YAR'S Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
