import { NextResponse } from "next/server";
import chatbotData from "../../../../sadies_alterations_chatbot_expanded.json";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY environment variable");
      return NextResponse.json({ error: "API configuration error" }, { status: 500 });
    }

    const systemPrompt = `You are SADIES Assistant, a premium AI chatbot for Sadie's Alterations, a luxury tailoring atelier located in Clayton, MO.
Your goal is to answer client questions professionally. You MUST respond in the same language the user uses to ask the question (e.g., if they ask in Turkish, reply in Turkish; if they ask in English, reply in English).

Here is the official business knowledge base, including services, hours, address, and pricing guidelines:
${JSON.stringify(chatbotData.intents, null, 2)}

Instructions:
1. Always maintain a polite, luxury-oriented, helpful, and concise tone.
2. Use the provided business knowledge base to answer questions. If the information is not in the knowledge base (e.g., if they ask for complex custom tasks not mentioned, or detailed pricing), tell them politely that they should visit the shop or contact us directly.
3. Our contact details:
   - Email: info@sadiesalteration.com
   - Telephone: +1 (314) 727-9976
   - Address: 7612 Wydown Blvd, Clayton, MO 63105
4. If they ask about booking a fitting, mention they can contact us by email/phone or visit the store.
5. Do not make up facts. Be honest and stay within the context of the atelier.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.5,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("OpenAI API Error:", errData);
      return NextResponse.json({ error: "Failed to fetch response from OpenAI" }, { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
