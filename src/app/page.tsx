import { ModeToggle } from "@/components/toggleTheme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-4 sm:p-8 sm:pb-20 gap-8 sm:gap-16">
      <div className="container w-full flex justify-end">
        <ModeToggle />
      </div>
      <main className="container flex flex-col row-start-2 items-center w-full">
        {/* Título */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-center sm:text-left"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          TodoList
        </h1>

        {/* Input + Botão */}
        <div className="flex w-full sm:w-3/5 items-center gap-2 mt-6">
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa..."
            className="h-12 sm:h-14 text-lg sm:text-2xl font-normal p-3 flex-1"
            style={{ fontFamily: "var(--font-poppins)" }}
          />
          <Button
            type="submit"
            variant="outline"
            className="h-12 sm:h-14 text-2xl sm:text-4xl items-center justify-center px-5 sm:px-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            +
          </Button>
        </div>

        {/* Contadores */}
        <div className="flex w-full sm:w-3/5 flex-row justify-between gap-2 mt-6 text-sm sm:text-lg">
          <h1
            className="font-bold text-blue-600"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tarefas criadas <span>0</span>
          </h1>
          <h1
            className="font-bold text-purple-600"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tarefas concluídas <span>0</span>
          </h1>
        </div>

        {/* Área vazia */}
        <div className="flex w-full sm:w-3/5 flex-col items-center gap-3 sm:gap-4 border-t border-t-gray-400 pt-10 sm:pt-16 text-center">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 w-full sm:w-3/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-8 sm:mt-0">
        <a
          className="flex items-center justify-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Criado com &#x2764;&#xFE0F; por Fridson Firmino
        </a>
        <div className="flex flex-row gap-4 justify-center">
          <a
            target="_blank"
            href="https://github.com/fridsonfirmino"
            className="flex items-center gap-2 text-2xl"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/fridson-firmino-611046225/"
            className="flex items-center gap-2 text-2xl"
          >
            <FaLinkedinIn />
          </a>

          <a
            target="_blank"
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
