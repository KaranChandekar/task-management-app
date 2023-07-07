"use client";

import { useTodos } from "@/store/todos";
import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter the todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
export default AddTodo;
