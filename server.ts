import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory bookings store (ready to be hooked to Make.com / Google Calendar)
interface BookingPayload {
  id: string;
  name: string;
  phone: string;
  therapy: string;
  preferredDate: string;
  preferredTime: string;
  isHomeTherapy: boolean;
  message?: string;
  createdAt: string;
  status: 'pending_confirmation' | 'confirmed';
}

const bookings: BookingPayload[] = [];

// Gemini client initialization
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `
You are the dedicated, knowledgeable, and polite virtual assistant for "AyushKaya – Panchkarma Therapies" located in Sainipuram, Roorkee.
Practitioner: A.K. Goswami
Direct Contact / WhatsApp: 9058989193
Key Offerings:
- Traditional Ayurvedic Panchkarma & Wellness Therapies
- Personalized Care tailored to individual wellness needs
- Home Therapy Available in Roorkee and nearby regions

The 24 Therapies at AyushKaya:
1. Kati Basti (Lower back herbal oil reservoir)
2. Janu Basti (Knee joint herbal oil pool)
3. Griva Basti (Cervical / neck herbal oil pool)
4. Nabhi Basti (Navel herbal oil pool for core and digestion balance)
5. Prasth Basti (Spine column herbal oil pooling)
6. Liver Basti (Abdominal/hepatic area gentle herbal oil retention)
7. Lung Basti (Thoracic area warm herbal oil retention)
8. Shiro Basti (Cranial herbal oil pooling cap)
9. Shiro Abhyang (Classical head and scalp oil massage)
10. Shiro Pichu (Medicated herbal oil pad on crown)
11. Shirodhara (Warm continuous rhythmic stream of herbal oil on forehead)
12. Nasya (Nasal herbal oil drops administration)
13. Karna Dhupan (Gentle ear fumigation with soothing medicinal herbs)
14. Karna Puran (Gentle medicated ear drops)
15. Akshi Tarpan (Rejuvenating eye bath with medicated ghee)
16. Hot & Cold Compress (Alternating thermal compress)
17. Patra/Patar Potli Pinda Swedana (Warm medicinal leaf poultice fomentation)
18. Shashtika Shali Pinda Swedana (Nourishing cooked medicated rice bolus fomentation)
19. Full Body Massage (Holistic herbal oil relaxation massage)
20. Partial Massage (Targeted therapeutic massage)
21. Abhyanga (Classical synchronized Ayurvedic full-body massage)
22. Fire Cupping (Traditional therapeutic suction cup therapy)
23. Leech Therapy (Jalaukavacharana - classical micro-circulation therapy)
24. Shringi Therapy (Classical horn/cupping bio-purification method)

CRITICAL GUIDELINES & ETHICAL BOUNDARIES:
1. NEVER invent appointment availability or guarantee specific calendar slots. Always clarify that requested dates/times are forwarded directly to practitioner A.K. Goswami for confirmation.
2. NEVER guarantee medical cures, make unverified claims, or diagnose illnesses. Use neutral, wellness-oriented language (e.g., "designed to support relaxation, flexibility, and natural bodily equilibrium").
3. If the user asks to book or check availability, invite them to share their preferred date, time, and whether they want clinic or home therapy, and guide them to use the WhatsApp button or Call (9058989193).
4. Welcome visitors warmly with traditional Indian warmth (e.g. "Namaste"). Answer questions clearly in English or Hindi/Hinglish as preferred by the user.
5. Keep responses concise, warm, helpful, and under 150 words. Always provide actionable next steps.
`;

// API route for AI Chat Assistant
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, userMessage } = req.body;
    const textQuery = userMessage || (messages && messages[messages.length - 1]?.text) || '';

    if (!textQuery.trim()) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    if (ai && apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      try {
        // Construct conversation context
        const formattedContents = [];
        if (Array.isArray(messages) && messages.length > 1) {
          const recent = messages.slice(-6);
          for (const m of recent) {
            formattedContents.push({
              role: m.sender === 'user' ? 'user' : 'model',
              parts: [{ text: m.text }],
            });
          }
        } else {
          formattedContents.push({
            role: 'user',
            parts: [{ text: textQuery }],
          });
        }

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Gemini API timeout')), 5000)
        );

        const geminiPromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: formattedContents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.9,
          },
        });

        const response = await Promise.race([geminiPromise, timeoutPromise]);

        const replyText = response.text || 'Namaste! How may I assist you with AyushKaya Panchkarma therapies today?';
        return res.json({ reply: replyText });
      } catch (geminiError) {
        console.warn('Gemini generation unavailable, using authentic fallback:', geminiError);
      }
    }

    // High quality contextual fallback if Gemini is offline or API key absent
    const q = textQuery.toLowerCase();
    let fallbackReply = `Namaste! Welcome to AyushKaya – Panchkarma Therapies in Sainipuram, Roorkee. `;

    if (q.includes('availab') || q.includes('time') || q.includes('slot') || q.includes('when')) {
      fallbackReply += `Session availability is confirmed directly by practitioner A.K. Goswami to ensure personalized care. Please share your preferred date and time, or tap 'Book Through WhatsApp' to verify live slots immediately on 9058989193.`;
    } else if (q.includes('home') || q.includes('ghar') || q.includes('visit')) {
      fallbackReply += `Yes, Home Therapy is available across Roorkee and nearby locations! Practitioner A.K. Goswami brings required therapeutic oils and equipment right to your residence. Would you like to schedule a home session?`;
    } else if (q.includes('price') || q.includes('cost') || q.includes('fee') || q.includes('rate')) {
      fallbackReply += `Our therapy rates vary depending on duration, specific medicated herbal oils, and whether the session is held at the Sainipuram clinic or your home. Please connect with A.K. Goswami on WhatsApp (9058989193) for transparent details.`;
    } else if (q.includes('shirodhara') || q.includes('stress') || q.includes('sleep') || q.includes('head')) {
      fallbackReply += `Shirodhara is one of our most popular therapies, featuring a gentle continuous stream of warm herbal oil onto the forehead to support deep mental calm and restorative sleep. Shiro Abhyang and Shiro Pichu are also available!`;
    } else if (q.includes('back') || q.includes('kati') || q.includes('spine') || q.includes('pain') || q.includes('kamar')) {
      fallbackReply += `For back comfort and lumbar support, Kati Basti (warm herbal oil pool within a traditional dough dam) along with Patra Potli Swedana is frequently recommended. We can arrange this at our clinic or at your home.`;
    } else if (q.includes('knee') || q.includes('janu') || q.includes('joint')) {
      fallbackReply += `For knee joint mobility and soothing warmth, Janu Basti creates a medicated herbal oil reservoir directly over the knee. It pairs wonderfully with herbal compresses.`;
    } else if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('kahan')) {
      fallbackReply += `AyushKaya is situated at Sainipuram, Roorkee (Uttarakhand). Home visits are also offered throughout Roorkee. You can tap 'Location' or 'Get Directions' on the website.`;
    } else {
      fallbackReply += `We offer 24 authentic therapies including Kati Basti, Janu Basti, Shirodhara, Abhyanga, and Patra Potli Swedana, with both clinic and home sessions. How can we support your wellness today?`;
    }

    return res.json({ reply: fallbackReply });
  } catch (err: any) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Unable to process chat request at this moment.' });
  }
});

// API route for Booking submission
app.post('/api/booking', (req: Request, res: Response) => {
  try {
    const { name, phone, therapy, preferredDate, preferredTime, isHomeTherapy, message } = req.body;

    if (!name || !phone || !therapy) {
      return res.status(400).json({ error: 'Name, phone number, and therapy are required.' });
    }

    const booking: BookingPayload = {
      id: `AK-${Date.now().toString(36).toUpperCase()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      therapy: String(therapy).trim(),
      preferredDate: preferredDate ? String(preferredDate).trim() : 'Flexible',
      preferredTime: preferredTime ? String(preferredTime).trim() : 'Flexible',
      isHomeTherapy: Boolean(isHomeTherapy),
      message: message ? String(message).trim() : undefined,
      createdAt: new Date().toISOString(),
      status: 'pending_confirmation',
    };

    bookings.push(booking);

    // Formatted WhatsApp text for instant handoff
    const waText = encodeURIComponent(
      `*AyushKaya Therapy Request*\n\n` +
      `*Ref ID:* ${booking.id}\n` +
      `*Name:* ${booking.name}\n` +
      `*Phone:* ${booking.phone}\n` +
      `*Therapy:* ${booking.therapy}\n` +
      `*Session Type:* ${booking.isHomeTherapy ? 'Home Therapy (Roorkee)' : 'Clinic (Sainipuram, Roorkee)'}\n` +
      `*Date:* ${booking.preferredDate}\n` +
      `*Time:* ${booking.preferredTime}\n` +
      (booking.message ? `*Notes:* ${booking.message}\n` : '') +
      `\nPlease verify availability and confirm my session.`
    );

    const waLink = `https://wa.me/919058989193?text=${waText}`;

    return res.json({
      success: true,
      message: 'Booking request registered. Awaiting practitioner confirmation.',
      booking,
      whatsappLink: waLink,
    });
  } catch (err) {
    console.error('Booking submission error:', err);
    return res.status(500).json({ error: 'Could not record booking request.' });
  }
});

// Integration with Vite
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
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
    console.log(`AyushKaya server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
