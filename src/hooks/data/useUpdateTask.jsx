import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import api from "../../lib/axios";

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
      const { data: updatedTask } = await api.patch(
        `/tasks/${taskId}`,
        taskToUpdate
      );
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
