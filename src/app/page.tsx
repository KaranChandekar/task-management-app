import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main>
      <h1>Task Management App</h1>
      <AddTodo />
      <Todo />
    </main>
  );
}
