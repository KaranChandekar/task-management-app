"use client";

import { useTodos } from "../store/Todos";
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
        className="w-[450px] border border-solid border-[#ccc] my-10 px-3 py-2 text-base font-semibold tracking-wider rounded focus:outline-none"
      />
      <button type="submit" className="bg-violet-600 hover:bg-violet-700 px-7 py-2 rounded ml-6 text-white font-bold">ADD</button>
    </form>
  );
};
export default AddTodo;
