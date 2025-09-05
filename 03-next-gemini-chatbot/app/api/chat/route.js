import { GoogleGenerativeAI } from '@google/generative-ai'

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error('Gemini API key not configured or using placeholder value')
      return Response.json({ 
        error: 'Gemini API key not configured. Please add your API key to .env.local' 
      }, { status: 500 })
    }

    // Initialize the Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    // Generate content
    const result = await model.generateContent(message)
    const response = await result.response
    const text = response.text()

    return Response.json({ response: text })
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    
    // Handle specific error cases
    if (error.message.includes('API key')) {
      return Response.json({ error: 'Invalid API key' }, { status: 401 })
    }
    
    if (error.message.includes('quota')) {
      return Response.json({ error: 'API quota exceeded' }, { status: 429 })
    }

    return Response.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}
