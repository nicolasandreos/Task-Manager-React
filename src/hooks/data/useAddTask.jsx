import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "../../lib/axios";

const useAddTask = (task) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const { data: createdTask } = await api.post("/tasks", task);
      return createdTask;
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
