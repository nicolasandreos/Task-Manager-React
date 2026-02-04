import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "../../lib/axios";

const useDeleteAllTasks = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "deleteAllTasks",
    mutationFn: async (tasks) => {
      for (const task of tasks) {
        const taskId = task.id;
        await api.delete(`/tasks/${taskId}`);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData("tasks", []);
      toast.success("All tasks deleted successfully.");
    },
    onError: () => {
      toast.error("Failed to delete tasks.");
    },
  });
};

export default useDeleteAllTasks;
