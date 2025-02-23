import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addTodo, fetchTodos } from "./api/index";
import TodoCard from "./components/TodoCard";

export default function Demo() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("")

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);

    }, 2000);
    return () => clearTimeout(handler)
  }, [search]);


  const { data: todos = [], isLoading } = useQuery({
    queryKey: ["todos", { search: debouncedSearch }],
    queryFn: () => fetchTodos(debouncedSearch),
    staleTime: 300000,

  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mb-4">
      <input
          type="text"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full max-w-md flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))
        ) : (
          <p className="text-center text-gray-500">No todos found</p>
        )}
      </div>
    </div>
  );
}
