import { useEffect, useRef, useState } from 'react'


export function App() {
  const [count, setCount] = useState(0)


  const countRef = useRef(0)

  useEffect(() => {
    countRef.current = count
    console.log('useEffect', countRef.current);

  }, [count])

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Previous: {countRef.current}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

