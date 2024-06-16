import "./App.css";
import { useState } from "react";

const style = {
  margin: 10,
};

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [power, setPower] = useState("");
  const [button, setButton] = useState(false);

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

    const timer = setTimeout(() => {
      setButton(false)
    }, 3000)

    return () => clearTimeout(timer)
  }

  return (
    <div className="App">
      <div>
        <h1>CREATING A HERO</h1>
        <label>Name </label>
        <input type="text" onChange={handleName} style={style} />
        <label>Age </label>
        <input type="number" onChange={handleAge} style={style} />
        <label>Height </label>
        <input type="text" onChange={handleHeight} style={style} />
        <label>Super Power</label>
        <input type="text" onChange={handleSuperPower} style={style} />
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
