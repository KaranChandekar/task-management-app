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
    filteredTodos = filteredTodos.filter((todo) => !todo.isCompleted);
  }

  return (
    <ul>
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.isCompleted}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.isCompleted && (
              <button type="button" onClick={() => handleTodoDeleted(todo.id)}>
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
