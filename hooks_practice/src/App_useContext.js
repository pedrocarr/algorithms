import { createContext, useContext } from "react";


const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "lightblue"
}

const moods = {
  happy: '😄',
  sad: '😢',
}


const MoodContext = createContext(moods);




function AppUseContext(props) {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji/>
    </MoodContext.Provider>
  );

}


function MoodEmoji() {
  const mood = useContext(MoodContext);

  return (
    <div style={style}>
      {mood}
    </div>
  );

}



export default AppUseContext;
