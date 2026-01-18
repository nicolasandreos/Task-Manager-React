import TaskSection from "./TaskSection";
import { LuSunMedium } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import TASKS from "../constants/tasks";

const Tasks = () => {
  const [tasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.period === "morning");
  const eveningTasks = tasks.filter((task) => task.period === "evening");
  const nightTasks = tasks.filter((task) => task.period === "night");

  return (
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
  );
};

export default Tasks;
