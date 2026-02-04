import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useAddTask = (task) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      return await response.json();
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData("tasks", (currentTasks) => {
        return [...currentTasks, newTask];
      });
      toast.success("Task added successfully");
    },
    onError: (error) => {
      toast.error("Error adding task:", error);
    },
  });
};

export default useAddTask;
