import { TodosProvider } from "../store/Todos";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Management App",
  description:
    "Simple Task Management App created using NextJS, Typescript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosProvider>{children}</TodosProvider>
      </body>
    </html>
  );
}
