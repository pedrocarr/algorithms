import './App.css';
import {useState} from 'react'


function App() {
  const fruits = [
    "Avocado",
    "Orange",
    "Blueberry",
    "Strawberry",
    "Lime",
    "Lemon"
  ]
  const [textChange, setTextChange] = useState('')
  const [fruitsData, setFruitsData] = useState(fruits)

  const handleTextChange = (e) => {
    setTimeout(() => {

      setTextChange(e.target.value)
    }, 1000);
    // console.log(textChange)
  }

  const filteredFruits = fruitsData.filter((fruit) => {
    return fruit.includes(textChange)
  })
  return (
    <div className='Main'>
      <input type="text" placeholder="Search here" onChange={handleTextChange} />

      {filteredFruits.map((fruit) => {

        return <p>{fruit}</p>
      })}
    </div>
  )
}

export default App;
