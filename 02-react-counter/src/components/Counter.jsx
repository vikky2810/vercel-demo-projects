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
      <div className="mb-10">
        <div className={`text-8xl font-bold transition-all duration-700 ${
          count > 0 ? 'text-emerald-400' : count < 0 ? 'text-red-400' : 'text-slate-300'
        } ${count !== 0 ? 'animate-pulse-slow' : ''} drop-shadow-2xl tracking-tight`}>
          {count}
        </div>
        <p className="text-slate-400 mt-4 text-lg font-medium">
          {count === 0 ? 'Ready to start counting' : count > 0 ? 'Positive value' : 'Negative value'}
        </p>
      </div>

      {/* Control Buttons */}
      <div className="space-y-6">
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-slate-600 hover:border-slate-500 min-w-[140px]"
          >
            <span className="text-lg font-bold">−</span> Decrement
          </button>
          <button
            onClick={increment}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-slate-600 hover:border-slate-500 min-w-[140px]"
          >
            <span className="text-lg font-bold">+</span> Increment
          </button>
        </div>
        
        <button
          onClick={reset}
          className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full border border-slate-500 hover:border-slate-400"
        >
          Reset Counter
        </button>
      </div>

    </div>
  )
}

export default Counter
