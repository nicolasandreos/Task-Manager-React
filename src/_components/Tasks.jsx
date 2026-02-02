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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Tasks = () => {
  const [isOpen, setIsOPen] = useState(false);
  const { mutate } = useMutation({
    mutationKey: "deleteAllTasks",
    mutationFn: async () => {
      for (const task of tasks) {
        const taskId = task.id;
        await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      toast.success("All tasks deleted successfully.");
    },
    onError: () => {
      toast.error("Failed to delete tasks.");
    },
  });
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

  const morningTasks = tasks?.filter((task) => task.period === "morning");
  const eveningTasks = tasks?.filter((task) => task.period === "evening");
  const nightTasks = tasks?.filter((task) => task.period === "night");

  return (
    <>
      {/* HEADER */}
      <Header title="My Tasks" subtitle="My Tasks">
        <Button onClick={mutate} color="secondary">
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
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={morningTasks}
        >
          <LuSunMedium />
          Manhã
        </TaskSection>
        <TaskSection
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={eveningTasks}
        >
          <CiCloudSun />
          Tarde
        </TaskSection>
        <TaskSection
          onChangeCheckboxTask={onChangeCheckboxTask}
          tasks={nightTasks}
        >
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
