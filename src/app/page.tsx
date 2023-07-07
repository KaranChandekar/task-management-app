import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main>
      <h1>Task Management App</h1>
      <Navbar />
      <AddTodo />
      <Todo />
    </main>
  );
}
