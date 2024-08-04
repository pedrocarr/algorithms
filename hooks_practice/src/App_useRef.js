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


  const myBtn = useRef(null);

  useEffect(() => {
    console.log(myBtn.current)
  },[])

  return (
    <div style={style}>
    <h1>useRef</h1>
    <button onClick={()=> console.log(myBtn.current)} style={buttonStyle} ref={myBtn}>useRef</button>
    </div>
  );

}

export default AppUseRef;
