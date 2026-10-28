import type { IncomingMessage, ServerResponse } from 'http';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION, generateFallbackResponse } from '../src/lib/assistantKnowledge';

interface VercelLikeRequest extends IncomingMessage {
  body?: any;
  query?: Record<string, string | string[]>;
  method?: string;
}

interface VercelLikeResponse extends ServerResponse {
  status: (statusCode: number) => VercelLikeResponse;
  json: (data: any) => void;
  send: (data: any) => void;
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).send('OK');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido. Utiliza POST.' });
    return;
  }

  try {
    // Parse body if not pre-parsed
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const messages = body?.messages;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Faltan mensajes en la solicitud' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const latestUserMessage = messages[messages.length - 1]?.text || '';

    // If no key or placeholder key, return immediate knowledge-base response
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      const fallback = generateFallbackResponse(latestUserMessage);
      res.status(200).json({ reply: fallback, source: 'knowledge-base' });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

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

    const timeoutPromise = new Promise<{ text?: string }>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API timeout')), 4500)
    );

    const response = await Promise.race([geminiPromise, timeoutPromise]);
    const replyText = response.text || generateFallbackResponse(latestUserMessage);
    res.status(200).json({ reply: replyText, source: 'gemini-3.8-flash' });
  } catch (err: unknown) {
    console.warn('Fallback activated for /api/chat (Vercel):', (err as Error)?.message || err);
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    const latestText = body?.messages?.[body?.messages?.length - 1]?.text || '';
    const fallback = generateFallbackResponse(latestText);
    res.status(200).json({ reply: fallback, source: 'knowledge-base' });
  }
}
