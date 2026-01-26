import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Button from "./_components/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Tasks from "./_components/Tasks";
import { useState } from "react";
import AddTaskModal from "./_components/AddTaskModal";

function App() {
  const [isOpen, setIsOPen] = useState(false);

  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="w-full space-y-6 px-8">
          {/* TASKS */}
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
