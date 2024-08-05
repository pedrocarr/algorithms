import { useMemo, useState } from 'react';


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

function AppUseMemo() {
  const [count, setCount] = useState(60);

  // const expensiveCount = useMemo()

  return (
    <div style={style}>
      <h1>useState</h1>
      <button style={buttonStyle} onClick={() => setCount(count+1)}>{count}</button>

    </div>
  );

}

export default AppUseMemo;
