import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = ""
  }



  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }} type="text" placeholder="Enter a task" />
        <button onClick={addTask}>Add</button>
      </div>
      <hr />
      <div>
        <ul>
          {todoList.map((task, index) => {
            return (
              <div>
                <li key={index}>{task}</li>
                <button onClick={() => {
                  setTodoList(todoList.filter((_, i) => i !== index));
                }}>Delete</button>
              </div>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
