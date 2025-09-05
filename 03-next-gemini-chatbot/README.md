# Next.js Gemini Chatbot

A fullstack AI chatbot application built with Next.js and powered by Google Gemini AI. This project demonstrates modern fullstack development with API routes, environment variables, and AI integration.

## Features

- 🤖 Powered by Google Gemini AI
- ⚛️ Built with Next.js 14 and React 18
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time chat interface
- 🔒 Secure API key management
- 📱 Fully responsive design
- ⚡ Server-side API routes
- 🎯 Error handling and loading states

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Google Cloud account with Gemini API access

## Quick Start

```bash
# Clone and navigate to the project
cd 03-next-gemini-chatbot

# Install dependencies
npm install

# Copy environment file and add your API key
cp env.example .env.local
# Edit .env.local and add your Gemini API key

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## Getting a Gemini API Key

### Easy Method (Recommended)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### Alternative Method (Google Cloud Console)

### Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for your project (required for API usage)

### Step 2: Enable the Gemini API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Generative Language API" or "Gemini API"
3. Click on it and press "Enable"

### Step 3: Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key (keep it secure!)

### Step 4: Set Usage Limits (Recommended)

1. Click on your API key to edit it
2. Set application restrictions and API restrictions
3. Set usage quotas to prevent unexpected charges

## Setup Instructions

### 1. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd 03-next-gemini-chatbot
npm install
```

### 2. Environment Configuration

1. **Copy the environment example file**:
   ```bash
   cp env.example .env.local
   ```

2. **Add your Gemini API key** to `.env.local`:
   ```bash
   GEMINI_API_KEY=your_actual_api_key_here
   ```

   **Important**: Never commit your `.env.local` file to version control!

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### 4. Build for Production

Create an optimized production build:

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## Vercel Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate** to the project directory:
   ```bash
   cd 03-next-gemini-chatbot
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project? `N`
   - Project name: `next-gemini-chatbot` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings? `N`

5. **Add environment variables**:
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   Enter your actual Gemini API key when prompted.

### Method 2: GitHub Integration

1. **Push** this folder to a GitHub repository
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** with your GitHub account
4. **Click** "New Project"
5. **Import** your repository
6. **Configure**:
   - Framework Preset: `Next.js`
   - Root Directory: `03-next-gemini-chatbot`
   - Build Command: `npm run build`
   - Output Directory: Leave empty (Next.js default)
   - Install Command: `npm install`
7. **Add Environment Variables**:
   - Go to Project Settings > Environment Variables
   - Add `GEMINI_API_KEY` with your actual API key
8. **Click** "Deploy"

### Method 3: Vercel Dashboard

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign in** to your account
3. **Click** "New Project"
4. **Import** from Git or upload files
5. **Configure** the project settings
6. **Add environment variables** in the dashboard
7. **Deploy**

## Adding Environment Variables in Vercel

### Via Vercel Dashboard:

1. Go to your project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add a new variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key
   - **Environment**: Production, Preview, Development (select all)
5. Click "Save"

### Via Vercel CLI:

```bash
vercel env add GEMINI_API_KEY
```

## Project Structure

```
03-next-gemini-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # API route for Gemini integration
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Main chat page
├── public/                       # Static assets
├── .env.local                    # Environment variables (not in git)
├── env.example                   # Environment variables template
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with modern hooks
- **Google Gemini AI** - AI language model
- **Tailwind CSS** - Utility-first CSS framework
- **@google/generative-ai** - Official Gemini SDK

## API Route Details

The `/api/chat` endpoint:

- **Method**: POST
- **Body**: `{ "message": "user input" }`
- **Response**: `{ "response": "AI response" }`
- **Error Handling**: Proper HTTP status codes and error messages

## Security Considerations

- ✅ API key stored in environment variables
- ✅ Server-side API calls (key never exposed to client)
- ✅ Input validation and sanitization
- ✅ Error handling without exposing sensitive information
- ✅ Rate limiting (configured in Google Cloud Console)

## Customization

### Styling
Modify the Tailwind classes in `app/page.js` to change the appearance.

### AI Model
Change the model in `app/api/chat/route.js`:
```javascript
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
```

### Chat Behavior
Modify the system prompt or add conversation history in the API route.

## Troubleshooting

### Common Issues

**"Gemini API key not configured"**:
- Make sure `.env.local` exists and contains `GEMINI_API_KEY`
- Restart the development server after adding the key

**"Invalid API key"**:
- Verify your API key is correct
- Check if the Gemini API is enabled in Google Cloud Console

**"API quota exceeded"**:
- Check your usage in Google Cloud Console
- Consider setting up billing and increasing quotas

**Build errors**:
- Make sure all dependencies are installed with `npm install`
- Check that your API key is properly set in Vercel environment variables

**"models/gemini-pro is not found" error**:
- This is a known issue with the model name. Try changing `gemini-pro` to `gemini-1.5-flash` in the API route
- Or use the latest model name from the [Gemini API documentation](https://ai.google.dev/docs)

### Development Tips

- Use the browser's Network tab to debug API calls
- Check the Vercel function logs for server-side errors
- Test the API route directly using tools like Postman

## Cost Considerations

- Gemini API has free tier limits
- Monitor usage in Google Cloud Console
- Set up billing alerts to avoid unexpected charges
- Consider implementing rate limiting for production use

## Next Steps

After deploying to Vercel, you can:
- Share your live chatbot URL
- Add custom domain
- Monitor usage and performance
- Implement conversation history
- Add user authentication
- Integrate with databases for chat persistence

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

Happy coding! 🚀
