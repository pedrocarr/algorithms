import { useEffect, useState } from 'react';


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



function AppUseEffect() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // this would be an infinite loop because the useEffect runs every time the component is rendered
  // put the dependency array as the second argument to prevent this
  useEffect(() => {
    fetch('foo').then(() => setLoaded(true))
    console.log('useEffect')

  })

  useEffect(() => {
    alert('Component has been mounted')

    return () => {
      alert('Component has been unmounted')
    }

  },[])

  return (
    <button style={buttonStyle} onClick={() => setCount(count + 1)}>{count}</button>
  );

}

export default AppUseEffect;
