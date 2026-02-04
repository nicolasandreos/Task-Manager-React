import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import api from "../../lib/axios";

const useGetTask = (taskId, onSuccess2) => {
  return useQuery({
    queryKey: ["task", taskId],
    enabled: !!taskId,
    queryFn: async () => {
      const { data: task } = await api.get(`/tasks/${taskId}`);
      onSuccess2(task);
      return task;
    },
    onError: () => {
      return toast.error("Failed to find details of this task");
    },
  });
};
export default useGetTask;
