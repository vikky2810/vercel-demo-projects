import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="text-center">
      {/* Counter Display */}
      <div className="mb-8">
        <div className={`text-6xl font-bold transition-all duration-300 ${
          count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-gray-500'
        } ${count !== 0 ? 'animate-pulse-slow' : ''}`}>
          {count}
        </div>
        <p className="text-gray-500 mt-2">
          {count === 0 ? 'Start counting!' : count > 0 ? 'Positive!' : 'Negative!'}
        </p>
      </div>

      {/* Control Buttons */}
      <div className="space-y-4">
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            - Decrement
          </button>
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            + Increment
          </button>
        </div>
        
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full"
        >
          Reset
        </button>
      </div>

      {/* Fun Stats */}
      {count !== 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Fun Facts</h3>
          <div className="text-sm text-gray-600 space-y-1">
            {count > 0 && (
              <p>🎉 You've incremented {count} times!</p>
            )}
            {count < 0 && (
              <p>📉 You've decremented {Math.abs(count)} times!</p>
            )}
            {Math.abs(count) >= 10 && (
              <p>🔥 You're on fire! Keep going!</p>
            )}
            {Math.abs(count) >= 50 && (
              <p>🚀 Amazing dedication!</p>
            )}
            {Math.abs(count) >= 100 && (
              <p>🏆 You're a counting champion!</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Counter
