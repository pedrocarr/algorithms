import { useState } from "react";


function App() {

  const [blocks, setBlocks] = useState([{ id: "A1", code: "", output: ""}])
  const [variables, setVariables] = useState({})

  const addBlock = () => {
    const newId = `A${blocks.length + 1}`
    setBlocks([...blocks, {id: newId, code: "", output: ""}])
  }

  const handleCodeChange = (id: string, newCode: string) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, code: newCode} : block))
  }

  const runCode = (id: string) => {
    setBlocks(blocks.map(block => {
      if (block.id === id) {
        try {
          const result = new Function("vars", `"use strict"; return (${block.code})`)(variables)

          const updatedVariables = { ...variables, [id]: result}

          setVariables(updatedVariables)
          return { ...block, output: String(result)}
        } catch (error: any) {
          return { ...block, output: `Error: ${error.message}`}
        }
      }
      return block
    }))

  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {blocks.map((block) => (
      <div key={block.id} className="flex flex-col items-start gap-2">
        <span className="font-bold">{block.id}</span>
        <textarea
          className="border p-2 w-80 h-20"
          placeholder="Enter some code ..."
          value={block.code}
          onChange={(e) => handleCodeChange(block.id, e.target.value)}
        />
        <button
        onClick={()=> runCode(block.id)}
        className="bg-gray-600 text-white px-4 py-2 rounded">
          Run
        </button>
        <div className="bg-gray-300 p-2 w-80 min-h-10 border rounded">
          {block.output || "Output will be here"}
        </div>
      </div>
      ))}

      <button
        onClick={addBlock}
        className="bg-gray-600 text-white px-4 py-2 rounded">
        Add new block
      </button>
    </div>
  );
}

export default App;
