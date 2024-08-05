import { useReducer } from 'react';


const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "lightblue"
}

const buttonStyle = {
  fontSize: "2rem",
  padding: "1rem 2rem",
  margin: "1rem",
  borderRadius: "10px",
  backgroundColor: "lightgreen",
  color: "black",
  border: "none",
  cursor: "pointer"
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error('Action type not found');
  }
}


function AppUseReducer() {
const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={style}>
      <h1>useReducer</h1>
      <h2>{state}</h2>
      <button style={buttonStyle} onClick={() => dispatch({type: 'increment'})}>+</button>
      <button style={buttonStyle} onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
}

export default AppUseReducer;
