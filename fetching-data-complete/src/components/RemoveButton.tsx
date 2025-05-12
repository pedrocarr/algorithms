import { useState } from "react";

function Parent () {
  const [children, setChildren] = useState([3,2,1])

  function removeChild(removeId: number) {
    setChildren(children.filter((id) => id !== removeId))
  }

  return (
    <div>
      <h2>Hi there ...</h2>
      {children.map((id) =>
        <Child key={id} id={id} remove={() => removeChild(id)}></Child>
      )}
    </div>
  )
}

function Child({id, remove}: {id: number; remove: () => void}) {
  return (
    <div>
      <button onClick={remove}>I am the child number {id}. Click to remove me!</button>
    </div>
  )
}

export default Parent
