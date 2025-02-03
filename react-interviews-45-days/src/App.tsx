import { useEffect, useMemo, useState } from "react"

function App() {
  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

  const [bgColor, setBgColor] = useState<string>(getRandomColor())
  const [feedback, setFeedback] = useState<string>("")

  useEffect(() => {
    setBgColor(getRandomColor());
  }, [])

  const buttons = useMemo(() => {
    const randomColors = [bgColor, getRandomColor(), getRandomColor()]
    return randomColors.sort(()=> Math.random() - 0.5)
  }, [bgColor])

  const handleGuess = (selectedColor: string) => {
    if (selectedColor === bgColor) {
      setFeedback("✅ Right Answer!")
      setTimeout(() => window.location.reload(), 2000)
    } else {
      setFeedback("❌ Wrong Answer! Try again.")
    }
  }

  return (
    <>
      <div className="main" style={{ backgroundColor: bgColor}}></div>
      <div className="buttonsDiv" >
      {buttons.map((color, index) => (
          <button key={index} onClick={() => handleGuess(color)}>
            {color}
          </button>
        ))}
      </div>
      <div className="feedback" style={{ marginTop: "20px", fontSize: "18px" }}>
        {feedback}
      </div>
    </>
  )
}

export default App
