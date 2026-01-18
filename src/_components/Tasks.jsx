import TaskSection from "./TaskSection";
import { LuSunMedium } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import TASKS from "../constants/tasks";
import { toast } from "sonner";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const onChangeCheckboxTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada");
        return { ...task, status: "to_do" };
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluida");
        return { ...task, status: "done" };
      }
      if (task.status === "to_do") {
        toast.success("Tarefa em progresso");
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

  const morningTasks = tasks.filter((task) => task.period === "morning");
  const eveningTasks = tasks.filter((task) => task.period === "evening");
  const nightTasks = tasks.filter((task) => task.period === "night");

  return (
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
  );
};

export default Tasks;
