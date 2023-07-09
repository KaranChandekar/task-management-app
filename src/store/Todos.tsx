"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDeleted: (id: string) => void;
};

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof localStorage !== "undefined") {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        return JSON.parse(storedTodos) as Todo[];
      }
    }
    return [];
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          isCompleted: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
      return newTodos;
    });
  };

  const handleTodoDeleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDeleted }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export function useTodos() {
  const todosContextValue = useContext(TodosContext);
  if (!todosContextValue) {
    throw new Error("useTodos used outside of the Provider");
  }
  return todosContextValue;
}
