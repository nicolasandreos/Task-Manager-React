import TaskSection from "./TaskSection";
import { LuSunMedium } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import AddTaskModal from "./AddTaskModal";
import useGetTasks from "../hooks/data/useGetTasks";
import useDeleteAllTasks from "../hooks/data/useDeleteAllTasks";

const Tasks = () => {
  const [isOpen, setIsOPen] = useState(false);

  const { data: tasks } = useGetTasks();

  const { mutate: deleteAllTasks } = useDeleteAllTasks();

  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };

  const morningTasks = tasks?.filter((task) => task.period === "morning");
  const eveningTasks = tasks?.filter((task) => task.period === "evening");
  const nightTasks = tasks?.filter((task) => task.period === "night");

  return (
    <>
      {/* HEADER */}
      <Header title="My Tasks" subtitle="My Tasks">
        <Button onClick={() => deleteAllTasks(tasks)} color="secondary">
          <FaRegTrashCan />
          Clean Tasks
        </Button>
        <Button onClick={handleModalInteraction}>
          <FaPlus />
          New Task
        </Button>
      </Header>

      <div className="w-full space-y-6 rounded-lg bg-white p-6">
        <TaskSection tasks={morningTasks}>
          <LuSunMedium />
          Manhã
        </TaskSection>
        <TaskSection tasks={eveningTasks}>
          <CiCloudSun />
          Tarde
        </TaskSection>
        <TaskSection tasks={nightTasks}>
          <MdOutlineNightlight />
          Noite
        </TaskSection>
      </div>

      {/* MODAL */}
      <AddTaskModal
        handleModalInteraction={handleModalInteraction}
        isOpen={isOpen}
      />
    </>
  );
};

export default Tasks;
