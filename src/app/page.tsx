import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-28">
      <h1 className="text-3xl font-bold mb-12">Task Management App</h1>
      <Navbar />
      <AddTodo />
      <Todo />
    </main>
  );
}
