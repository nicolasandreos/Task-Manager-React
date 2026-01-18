import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Button from "./_components/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Tasks from "./_components/Tasks";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="w-full space-y-6 px-8">
          {/* HEADER */}
          <div className="w-full pt-16">
            <Header title="Minhas Tarefas" subtitle="Minhas Tarefas">
              <Button variant="secondary">
                <FaRegTrashCan />
                Limpar Tarefas
              </Button>
              <Button>
                <FaPlus />
                Nova Tarefa
              </Button>
            </Header>
          </div>

          {/* TASKS */}
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
