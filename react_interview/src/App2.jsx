import { useEffect, useState } from "react"



function App2 () {

  const [text, setText] = useState("")


  const useDebounce = (val, delay = 500) => {
    const [debounce, setDebounce] = useState(val)


    useEffect(()=>{
      const timer = setTimeout(()=>{

      setDebounce(val)

      },delay)


      return () => clearTimeout(timer)


    },[val, delay])


    return debounce
  }


  const debouncedText = useDebounce(text)




  return <div>
    <h1>Debounce test</h1>

    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />


    <p>Text: {debouncedText}</p>
  </div>
}



export default App2
