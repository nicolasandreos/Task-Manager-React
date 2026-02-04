import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Button from "./_components/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import useDeleteAllTasks from "./hooks/data/useDeleteAllTasks";
import AddTaskModal from "./_components/AddTaskModal";

function App() {
  const [isOpen, setIsOPen] = useState(false);
  const { mutate: deleteAllTasks } = useDeleteAllTasks();
  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-8.5">
        <Header title="Home" subtitle="Home">
          <Button onClick={() => deleteAllTasks(tasks)} color="secondary">
            <FaRegTrashCan />
            Clean Tasks
          </Button>
          <Button onClick={handleModalInteraction}>
            <FaPlus />
            New Task
          </Button>
        </Header>
      </div>
      {/* MODAL */}
      <AddTaskModal
        handleModalInteraction={handleModalInteraction}
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
