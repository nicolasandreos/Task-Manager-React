import TaskSection from "./TaskSection";
import { LuSunMedium } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import TASKS from "../constants/tasks";
import { toast } from "sonner";
import Header from "./Header";
import Button from "./Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import AddTaskModal from "./AddTaskModal";

const Tasks = () => {
  const [isOpen, setIsOPen] = useState(false);
  const [tasks, setTasks] = useState(TASKS);

  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };

  const onChangeCheckboxTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === "done") {
        toast.success("Task restarted");
        return { ...task, status: "to_do" };
      }
      if (task.status === "in_progress") {
        toast.success("Task completed");
        return { ...task, status: "done" };
      }
      if (task.status === "to_do") {
        toast.success("Task in progress");
        return { ...task, status: "in_progress" };
      }
    });
    console.log(newTasks);
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada");
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const morningTasks = tasks.filter((task) => task.period === "morning");
  const eveningTasks = tasks.filter((task) => task.period === "evening");
  const nightTasks = tasks.filter((task) => task.period === "night");

  return (
    <>
      {/* HEADER */}
      <div className="w-full pt-16">
        <Header title="My Tasks" subtitle="My Tasks">
          <Button variant="secondary">
            <FaRegTrashCan />
            Clean Tasks
          </Button>
          <Button onClick={handleModalInteraction}>
            <FaPlus />
            New Task
          </Button>
        </Header>
      </div>

      <div className="w-full space-y-6 rounded-lg bg-white p-6">
        <TaskSection
          handleDeleteTask={handleDeleteTask}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={morningTasks}
        >
          <LuSunMedium />
          Manhã
        </TaskSection>
        <TaskSection
          handleDeleteTask={handleDeleteTask}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={eveningTasks}
        >
          <CiCloudSun />
          Tarde
        </TaskSection>
        <TaskSection
          handleDeleteTask={handleDeleteTask}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={nightTasks}
        >
          <MdOutlineNightlight />
          Noite
        </TaskSection>
      </div>

      {/* MODAL */}
      <AddTaskModal
        onSubmitTask={addTask}
        handleModalInteraction={handleModalInteraction}
        isOpen={isOpen}
      />
    </>
  );
};

export default Tasks;
