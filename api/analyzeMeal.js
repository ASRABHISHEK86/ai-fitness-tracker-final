import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Server configuration error: Missing API Key." });
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const { mealText } = req.body;
  if (!mealText) {
    return res.status(400).json({ error: 'Meal text is required' });
  }

  const prompt = `Analyze the meal: "${mealText}". Provide a JSON object with estimated nutritional values (calories, protein, carbs, fat). Only return a valid JSON object with keys "calories", "protein", "carbs", and "fat".`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text().replace(/```json|```/g, "").trim();
    const data = JSON.parse(jsonText);
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to analyze meal." });
  }
}