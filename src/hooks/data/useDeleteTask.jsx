import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "../../lib/axios";

const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: `delete-${taskId}`,
    mutationFn: async () => {
      const { data: deletedTask } = await api.delete(`/tasks/${taskId}`);
      return deletedTask;
    },
    onSuccess: () => {
      queryClient.setQueryData("tasks", (currentTasks) => {
        return currentTasks?.filter((t) => t.id !== taskId);
      });
      toast.success("Task deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });
};

export default useDeleteTask;
