import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: `update-${taskId}`,
    mutationFn: async ({ title, period, description, status }) => {
      const taskToUpdate = {
        title: title.trim(),
        period,
        description: description.trim(),
        status,
      };
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskToUpdate),
      });
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
      const updatedTask = await response.json();
      return updatedTask;
    },
    onSuccess: (updatedTask) => {
      toast.success("Task updated successfully");
      queryClient.setQueryData("tasks", (oldTasks) => {
        return oldTasks.map((task) =>
          task.id === taskId ? updatedTask : task
        );
      });
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });
};
