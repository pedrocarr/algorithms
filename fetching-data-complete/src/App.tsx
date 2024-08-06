import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="text-3xl font-bold">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        </p>
        <p>{count}</p>
      </header>
    </div>
  )
}

export default App
