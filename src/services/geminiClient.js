import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY 

if (!apiKey) {
  console.error('❌ VITE_GEMINI_API_KEY is not set!')
} else {
  console.log('✅ API Key loaded successfully')
}

const genAI = new GoogleGenerativeAI(apiKey)

export async function generateRoadmapFromPrompt(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash', // ✅ Current stable model (fast, supports JSON well)
      // alternatives if needed:
      // 'gemini-2.5-flash' - newer, even better
      // 'gemini-1.5-flash' - stable fallback
      // 'gemini-2.0-flash-lite' - fastest/cheapest
    })

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    return text
  } catch (error) {
    console.error('Error generating roadmap:', error)
    throw error
  }
}
