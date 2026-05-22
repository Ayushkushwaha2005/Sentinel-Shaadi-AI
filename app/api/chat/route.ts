import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);

    const response = result.response.text();

    return Response.json({
      reply: response,
    });

  } catch (error) {

    console.log("Gemini Error:", error);

    // FALLBACK RESPONSE
    return Response.json({
      reply: `
✨ Sentinel Shaadi AI Wedding Blueprint

📍 Recommended Areas:
• Gomti Nagar
• Hazratganj
• Indira Nagar

🏛 Suggested Venue:
Taj Mahal Lucknow / Ramada Lucknow

🍽 Catering Estimate:
₹800–₹1400 per guest

🎨 Decor Theme:
Luxury Floral + Royal Lighting

🚑 Emergency Planning:
• Nearby hospital support
• Backup generator
• VIP guest management

🚗 Parking:
Dedicated valet + guest parking zones

💡 AI Recommendation:
Book venue at least 2 months in advance for better pricing and availability.
`,
    });
  }
}