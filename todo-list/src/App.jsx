import { useRef, useState } from "react";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
  };

  return (
    <div className="text-center">
      <h1 className="text-sky-500 text-3xl mb-3">Todo List</h1>
      <div>
        <input
          className="pl-1 w-64 h-8 border border-gray-400 m-1"
          ref={inputTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
          type="text"
          placeholder="Enter a task"
        />
        <button
          className="w-24 h-8 bg-green-400 border-none rounded-sm text-white"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <hr className="mb-4" />
      <div>
        <ul>
          {todoList.map((task, index) => {
            return (
              <div>
                <li className="text-3xl mr-1" key={index}>
                  {task}
                </li>
                <button
                  className="w-24 h-8 bg-red-600 border-none rounded-sm text-white"
                  onClick={() => {
                    setTodoList(todoList.filter((_, i) => i !== index));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
