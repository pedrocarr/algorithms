import './App.css';
import { useState } from 'react';

const style = {
  margin: 10
}

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [height, setHeight] = useState(null)
  const [power, setPower] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }

  const handleHeight = (event) => {
    setHeight(event.target.value)
  }

  const handleSuperPower = (event) => {
    setPower(event.target.value)
  }

  return (
    <div className="App">
      <h1>CREATING A HERO</h1>
      <label>Name </label>
      <input type='text' onChange={handleName} style={style} />
      <label>Age </label>
      <input type='number' onChange={handleAge} style={style} />
      <label>Height </label>
      <input type='text' onChange={handleHeight} style={style} />
      <label>Super Power</label>
      <input type='text' onChange={handleSuperPower} style={style} />
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{height}</p>
        <p>{power}</p>
      </div>

    </div>
  );
}

export default App;
