import { useState, useRef } from "react";



function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [power, setPower] = useState("");
  const [button, setButton] = useState(false);

  const clearNameInput = useRef(null)






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
    clearNameInput.current.value = ""

    const timer = setTimeout(() => {
      setButton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }

  return (
    <div className="text-center">
      <div>
        <h1 className="text-3xl font-bold hover:bg-red-500 text-black mb-4">CREATING A HERO</h1>
        <label className="font-semibold m-2">Name</label>
        <input className="m-2 p-1" ref={clearNameInput} type="text" onChange={handleName} />
        <label className="font-semibold m-2">Age</label>
        <input className="m-2 p-1" type="number" onChange={handleAge} />
        <label className="font-semibold m-2">Height</label>
        <input className="m-2 p-1" type="number" onChange={handleHeight} />
        <label className="font-semibold m-2">Super Power</label>
        <input className="m-2 p-1" type="text" onChange={handleSuperPower} />
      </div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4" onClick={handleDisplayCharacter}>Display Hero</button>
      {button && (
        <div>
          <h1 className="text-2xl mt-4">MY HERO</h1>

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
