import './globals.css'

export const metadata = {
  title: 'Gemini Chatbot',
  description: 'A chatbot powered by Google Gemini AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
