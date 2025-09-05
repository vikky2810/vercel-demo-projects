import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          React Counter
        </h1>
        <p className="text-gray-600 text-center mb-8">
          A simple counter built with React, Vite, and Tailwind CSS
        </p>
        <Counter />
      </div>
    </div>
  )
}

export default App
