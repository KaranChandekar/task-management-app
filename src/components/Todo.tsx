"use client";

import { useTodos } from "@/store/todos";

const Todo = () => {
  const { todos } = useTodos();
  console.log(todos);

  let filteredTodos = todos;

  return (
    <ul>
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.isCompleted}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.isCompleted && <button type="button">Delete</button>}
          </li>
        );
      })}
    </ul>
  );
};
export default Todo;
