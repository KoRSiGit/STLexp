import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT ? parseInt(process.env.PORT, 10) : 8080) : 3000;

app.use(express.json());

// Helper for GoogleGenAI lazy loading in order to prevent crash on startup if missing API Key
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  if (aiClient) return aiClient;
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === 'MY_GEMINI_API_KEY' || key === '') {
    return null;
  }
  try {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    return aiClient;
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
    return null;
  }
}

// 1. API route: AI Engineer Q&A Chat
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message payload is required' });
  }

  const ai = getAIClient();

  if (!ai) {
    // Elegant fallback simulation representing high quality technical answers if API Key isn't configured in the environment
    console.warn('GEMINI_API_KEY is not configured. Using metallurgical backup system.');
    
    let fallbackReply = 'Сбой инициализации ИИ-модуля. Пожалуйста, добавьте ваш рабочий GEMINI_API_KEY в панели Settings > Secrets. \n\n';
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('смесител') || lowerMsg.includes('хтс') || lowerMsg.includes('компонент')) {
      fallbackReply += 'Рекомендация по ХТС процессам:\n' +
        '1. Расход смолы обычно поддерживается на уровне 1.0 - 1.4% от массы песка.\n' +
        '2. Расход отвердителя (катализатора) составляет от 30% до 50% от массы смолы в зависимости от температуры формовочного песка и воздуха.\n' +
        '3. Повышенная вентиляция в зоне смесителя обязательна во избежание дефектов газонасыщения.';
    } else if (lowerMsg.includes('печ') || lowerMsg.includes('плавк') || lowerMsg.includes('индукц')) {
      fallbackReply += 'Рекомендация по индукционным плавильным печи:\n' +
        'Для выплавки стали и чугуна оптимальны среднечастотные печи с микропроцессорными ТПЧ на тиристорах. \n' +
        'Стальной каркас (серия GW) предпочтительнее алюминиевого из-за жесткости рамы, снижения магнитных утечек наружу и повышенного срока службы футеровки тигля.';
    } else {
      fallbackReply += 'Для расчета подбора оборудования, свяжитесь напрямую с нашими инженерами-конструкторами через вкладку «Спецификация запроса» или напишите нам на info@sibtehlit.ru.';
    }
    
    return res.json({ reply: fallbackReply });
  }

  try {
    // Base prompt setting the persona
    const systemInstruction = 
      'Вы — старший инженер-металлург и главный конструктор компании «Сибтехлит» (Siberian Foundry Technologies). ' +
      'Ваша цель — давать экспертные, детальные, математически точные ответы на технические вопросы клиентов касательно литейных процессов в СНГ. ' +
      'Ваш тон — деловой, профессиональный, академический, но доступный. ' +
      'Используйте профессиональную терминологию (ГОСТ, заливка, тигли, футеровка, формовка ХТС, связующие смолы, заливочные кабели, регенерация, пригар отливок). ' +
      'Рекомендуйте оборудование «Сибтехлит» (смесители СХ-10, регенерация РП-8, печи GW, градирни ГЗ-100) как надежные решения. ' +
      'Отвечайте на русском языке.';

    // Prepare contents correctly matching SDK specification
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Не удалось сформировать технический ответ. Пожалуйста, перефразируйте вопрос.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate model response', 
      details: error.message 
    });
  }
});

// 2. API route: Submit RFQ (Request for Quote)
app.post('/api/rfq/submit', (req, res) => {
  const { meta, items } = req.body;

  if (!meta || !items || items.length === 0) {
    return res.status(400).json({ error: 'Metadata and items array required for specification setup' });
  }

  // Generate unique transaction ID following B2B style
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const randNum = Math.floor(1000 + Math.random() * 9000);
  const rfqId = `КД-${dateStr}-${randNum}`;

  console.log(`[RFQ Received] ID: ${rfqId}`, { meta, items });

  // In a real production system, this saves to a DB or notifies email.
  return res.json({ 
    success: true, 
    rfqId, 
    message: 'Specification successfully registered' 
  });
});

// 3. Vite middleware / Static files serving setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server fully operational on port ${PORT}`);
  });
}

startServer();
