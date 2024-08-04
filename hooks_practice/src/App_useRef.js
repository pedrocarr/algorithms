import { useEffect, useRef, useState } from 'react';


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

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "lightblue"
}



function AppUseRef() {


  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
  }, [count])

  return (
    <div style={style}>
      <h1>useRef</h1>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>{count}</button>
      <h2>Previous: {countRef.current}</h2>
    </div>
  );


}

export default AppUseRef;
