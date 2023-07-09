"use client";

import { useTodos } from "../store/Todos";
import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todo.length === 0 ? return : handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter the todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="md:w-[450px] w-[240px] border border-solid border-[#ccc] my-10 px-3 py-2 md:text-base text-sm font-semibold tracking-wider rounded focus:outline-none"
      />
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-700 md:px-7 px-3 py-2 rounded md:ml-6 ml-2 text-white font-bold text-sm md:text-base"
      >
        ADD
      </button>
    </form>
  );
};
export default AddTodo;
