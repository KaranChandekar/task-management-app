"use client";

import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(todo);
    e.preventDefault();
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
