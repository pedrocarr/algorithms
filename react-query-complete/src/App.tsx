import { useRef, useState } from 'react'


export function App() {
  const [count, setCount] = useState(0)


  const previous = useRef(0)

  previous.current = count


  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Previous: {previous.current - 1}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    </>
  )
}

