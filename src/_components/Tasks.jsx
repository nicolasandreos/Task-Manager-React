import TaskSection from "./TaskSection";
import { LuSunMedium } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "./Header";
import Button from "./Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import AddTaskModal from "./AddTaskModal";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Tasks = () => {
  const [isOpen, setIsOPen] = useState(false);

  const queryClient = useQueryClient();
  const { data: tasks, refetch } = useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/tasks");
      return await response.json();
    },
  });

  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };

  const onChangeCheckboxTask = (taskId) => {
    refetch();
  };

  const onDeleteTaskSuccess = async (taskId) => {
    const newTasks = tasks?.filter((task) => task.id !== taskId);
    queryClient.setQueryData("tasks", newTasks);
    toast.success("Tarefa deletada");
  };

  const onAddTaskSuccess = async (task) => {
    toast.success("Task added successfully");
    queryClient.setQueryData("tasks", (currentTasks) => {
      return [...currentTasks, task];
    });
  };

  const morningTasks = tasks?.filter((task) => task.period === "morning");
  const eveningTasks = tasks?.filter((task) => task.period === "evening");
  const nightTasks = tasks?.filter((task) => task.period === "night");

  return (
    <>
      {/* HEADER */}

      <Header title="My Tasks" subtitle="My Tasks">
        <Button color="secondary">
          <FaRegTrashCan />
          Clean Tasks
        </Button>
        <Button onClick={handleModalInteraction}>
          <FaPlus />
          New Task
        </Button>
      </Header>

      <div className="w-full space-y-6 rounded-lg bg-white p-6">
        <TaskSection
          handleDeleteTask={onDeleteTaskSuccess}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={morningTasks}
        >
          <LuSunMedium />
          Manhã
        </TaskSection>
        <TaskSection
          handleDeleteTask={onDeleteTaskSuccess}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={eveningTasks}
        >
          <CiCloudSun />
          Tarde
        </TaskSection>
        <TaskSection
          handleDeleteTask={onDeleteTaskSuccess}
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={nightTasks}
        >
          <MdOutlineNightlight />
          Noite
        </TaskSection>
      </div>

      {/* MODAL */}
      <AddTaskModal
        onSubmitTask={onAddTaskSuccess}
        handleModalInteraction={handleModalInteraction}
        isOpen={isOpen}
      />
    </>
  );
};

export default Tasks;
