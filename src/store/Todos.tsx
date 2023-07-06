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
};

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = (children: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

// Context api
export const useTodos = () => {
  const todosContextValue = useContext(TodosContext);
  if (!todosContextValue) {
    throw new Error("UseTodos used outside of the Provider");
  }
  return todosContextValue;
};
