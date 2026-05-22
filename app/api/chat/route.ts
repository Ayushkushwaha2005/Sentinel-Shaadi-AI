import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
You are Sentinel Shaadi AI.

You are an intelligent luxury wedding planning assistant focused on Lucknow, India.

User request:
${message}

Your task:
- Suggest wedding venues
- Give realistic budget estimates
- Recommend catering ideas
- Suggest decoration themes
- Suggest emergency planning tips
- Give VIP guest handling recommendations

Rules:
- Keep answers realistic
- Keep answers professional
- Use modern formatting
- Keep response concise but useful
- Focus on Lucknow wedding culture
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return Response.json({
      reply: response,
    });

  } catch (error) {
    console.log("Gemini Error:", error);

    return Response.json({
      reply:
        "AI service temporarily unavailable. Please try again.",
    });
  }
}