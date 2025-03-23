import { useEffect, useState } from "react"


const useDebounce = (text, delay = 500) => {
  const [debounce, setDebounce] = useState(text);


  useEffect(() => {
    const timer = setTimeout(() => {

      setDebounce(text)
    }, delay);

    return () => {
      clearTimeout(timer);
    }

  }, [text, delay])

return debounce

}

const SecondQuestion = () => {
  const [text, setText] = useState("")
  const debouncedText = useDebounce(text)

  return (
    <div>
      <h2>Debouncer Test</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => { setText(e.target.value) }}
        placeholder="Type something"
        style={{ marginRight: "10px" }}
      />
      <p> Debounced value: {debouncedText}</p>
    </div>
  )
}

export default SecondQuestion;
