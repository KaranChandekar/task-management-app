"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

const Todo = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDeleted } = useTodos();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  let filteredTodos = todos;

  if (todosFilter === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.isCompleted);
  } else if (todosFilter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.isCompleted);
  }

  return (
    <ul>
      {filteredTodos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="grid grid-cols-4 break-words items-center w-[600px] min-h-[60px] border-b border-solid first:border-t py-4 hover:bg-red-50"
          >
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.isCompleted}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className="text-gray-700 col-span-2"
            >
              {todo.task}
            </label>
            {todo.isCompleted && (
              <button
                type="button"
                onClick={() => handleTodoDeleted(todo.id)}
                className="flex items-center gap-2 justify-center bg-red-600 hover:bg-red-700 py-2 w-28 rounded ml-6 text-white font-bold"
              >
                Delete <FiTrash2 />
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default Todo;
