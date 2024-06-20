import "./App.css";
import { useState, useRef } from "react";

const style = {
  margin: 10,
};

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [power, setPower] = useState("");
  const [button, setButton] = useState(false);

  const clearInput = useRef(null)


  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleSuperPower = (event) => {
    setPower(event.target.value);
  };

  const handleDisplayCharacter = () => {
    setButton(true)
    clearInput.current.value = ""

    const timer = setTimeout(() => {
      setButton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleDisplayCharacter();
    }
  };

  return (
    <div className="App">
      <div>
        <h1>CREATING A HERO</h1>
        <label>Name </label>
        <input ref={clearInput} type="text" onChange={handleName} style={style} onKeyPress={handleKeyPress} />
        <label>Age </label>
        <input ref={clearInput} type="number" onChange={handleAge} style={style} />
        <label>Height </label>
        <input ref={clearInput} type="text" onChange={handleHeight} style={style} />
        <label>Super Power</label>
        <input ref={clearInput} type="text" onChange={handleSuperPower} style={style} />
      </div>
      <button onClick={handleDisplayCharacter}>Display Hero</button>
      {button && (
        <div>
          <h1>MY HERO</h1>

          <p><strong>Name:</strong> {name}</p>

          <p><strong>Age:</strong> {age}</p>

          <p><strong>Height:</strong> {height}</p>

          <p><strong>Super Power:</strong> {power}</p>

        </div>
      )}

    </div>
  );
}

export default App;
