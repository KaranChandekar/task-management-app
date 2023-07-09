import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen md:pt-12 px-2 py-10">
      <h1 className="md:text-3xl text-2xl text-gray-700 font-bold md:mb-16 mb-8">
        Task Management App
      </h1>
      <Navbar />
      <AddTodo />
      <Todo />
    </main>
  );
}
