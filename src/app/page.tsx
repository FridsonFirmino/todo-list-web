"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/toggleTheme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Task from "@/components/task";

interface Task {
  name: string;
  done: boolean;
}
export default function Home() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [tasksCount, setTasksCount] = useState(0);
  const [tasksReadCount, setTasksReadCount] = useState(0);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTasksCount(tasks.length);
    setTasksReadCount(tasks.filter((t) => t.done).length);
  }, [tasks]);

  const addTask = () => {
    if (todo.trim() === "") {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    const newTask: Task = {
      name: todo.trim(),
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTasksCount(tasksCount + 1);
    console.log("Adicionar tarefa:", todo);

    setTodo("");
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setTasksCount(tasksCount - 1);
  };

  const readTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    const readCount = newTasks.filter((t) => t.done).length;
    setTasksReadCount(readCount);
  };

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen p-4 sm:p-8 sm:pb-20 gap-8 sm:gap-16">
      {/* Barra superior */}
      <header className="w-full max-w-3xl mx-auto flex justify-end">
        <ModeToggle />
      </header>

      {/* Conteúdo principal */}
      <main className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Título */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-center"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          TodoList
        </h1>

        {/* Input + Botão */}
        <div className="flex w-full items-center gap-2 mt-6">
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa..."
            className="h-12 sm:h-14 text-lg sm:text-2xl font-normal p-3 flex-1"
            style={{ fontFamily: "var(--font-poppins)" }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            type="submit"
            variant="outline"
            className="h-12 sm:h-14 text-2xl sm:text-4xl items-center justify-center px-5 sm:px-6"
            style={{ fontFamily: "var(--font-poppins)" }}
            onClick={addTask}
          >
            +
          </Button>
        </div>

        {/* Contadores */}
        <div className="flex w-full flex-row justify-between gap-2 mt-6 text-sm sm:text-lg">
          <h1
            className="font-bold text-blue-600"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tarefas criadas{" "}
            <span className="bg-gray-500 px-2 rounded-full text-amber-50">
              {tasksCount}
            </span>
          </h1>
          <h1
            className="font-bold text-purple-600"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tarefas concluídas{" "}
            <span className="bg-gray-500 px-2 rounded-full text-amber-50">
              {tasksReadCount} de {tasksCount}
            </span>
          </h1>
        </div>

        {/* Área vazia */}
        <div className="flex w-full flex-col items-center gap-3 sm:gap-4 border-t border-t-gray-400 pt-4 sm:pt-4 text-center flex-1 overflow-y-auto max-h-[60vh]">
          {tasks.length === 0 ? (
            <>
              <Clipboard
                size={60}
                color="gray"
                className="sm:w-[82px] sm:h-[82px]"
              />
              <h1
                className="text-lg sm:text-2xl font-bold text-gray-600"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Você ainda não tem tarefas cadastradas
              </h1>
              <p
                className="text-sm sm:text-lg text-gray-500"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Crie tarefas e organize seus itens a fazer
              </p>
            </>
          ) : (
            <ul className="w-full text-left">
              {tasks.map((t, i) => (
                <li
                  key={i}
                  className="p-3 text-lg sm:text-xl"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <Task
                    index={i}
                    name={t.name}
                    done={t.done}
                    onDelete={removeTask}
                    onRead={readTask}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-8 sm:mt-0">
        <a
          className="flex items-center justify-center gap-2 hover:underline hover:underline-offset-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Criado com &#x2764;&#xFE0F; por Fridson Firmino
        </a>
        <div className="flex flex-row gap-4 justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fridsonfirmino"
            className="flex items-center gap-2 text-2xl"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fridson-firmino-611046225/"
            className="flex items-center gap-2 text-2xl"
          >
            <FaLinkedinIn />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/firmino2f/"
            className="flex items-center gap-2 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}
