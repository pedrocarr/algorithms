import { useEffect, useState } from "react"


const App3 = () => {

  const useDebounce = (value, delay = 500) => {
    const [debounce, setDebounce] = useState(value)

    useEffect(()=> {

      const timer = setTimeout(()=>{

        setDebounce(value)


      },delay)


      return () => clearTimeout(timer)

    },[value, delay])


    return debounce
  }

  const [text, setText] = useState("")
  const debouncedText = useDebounce(text)



  return <div className="text-center">
    <h1>Debounce Test</h1>
    <span>Text: </span>
    <input className="border m-1 p-1" type="text" value={text} onChange={(e) => setText(e.target.value)} />

    <p>Typed text: {debouncedText}</p>
  </div>


}

export default App3
