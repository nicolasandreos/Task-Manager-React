import { tv } from "tailwind-variants";
import Checkbox from "./Checkbox";
import { IoOpenOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { useState } from "react";
import { Link } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TaskItem = ({ task, onChangeCheckboxTask }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: `delete-${task.id}`,
    mutationFn: async (taskId) => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      return taskId;
    },
    onSuccess: (taskId) => {
      queryClient.setQueryData("tasks", (currentTasks) => {
        return currentTasks?.filter((t) => t.id !== taskId);
      });
      toast.success("Task deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });

  const taskItem = tv({
    base: "flex w-full items-center justify-between rounded-lg p-3",
    variants: {
      status: {
        done: "text-[#002C2E] bg-[#00f2ff1c]",
        in_progress: "bg-[#ffeabf54] text-process",
        to_do: "bg-[#d1d1d11c] text-[#002C2E]",
      },
    },
  });

  const setNewTaskStatus = (task) => {
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
  };

  const handleUpdateTaskStatus = async (taskId) => {
    try {
      const getResponse = await fetch(`http://localhost:3000/tasks/${taskId}`);
      if (!getResponse.ok) {
        toast.error("Failed get task details");
        return;
      }
      let task = await getResponse.json();
      task = setNewTaskStatus(task);

      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        toast.error("Failed to update task status");
        return;
      }
      onChangeCheckboxTask(taskId);
    } catch (error) {
      toast.error("An error occurred while updating the task status");
    }
  };

  return (
    <div className={`${taskItem({ status: task.status })}`}>
      <div className={`flex gap-4.5`}>
        <Checkbox task={task} onChangeCheckboxTask={handleUpdateTaskStatus} />

        <p className="">{task.title}</p>
      </div>
      <div className="text-text-gray flex gap-3 text-xl">
        {isPending ? (
          <AiOutlineLoading3Quarters className="animate-spin text-gray-700" />
        ) : (
          <IoTrashOutline
            onClick={() => mutate(task.id)}
            className="transition-all duration-200 hover:text-red-300"
          />
        )}
        <Link to={`/task/${task.id}`}>
          <IoOpenOutline />
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
