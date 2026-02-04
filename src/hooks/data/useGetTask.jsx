import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useGetTask = (taskId, onSuccess2) => {
  return useQuery({
    queryKey: ["task", taskId],
    enabled: !!taskId,
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch task");
      }
      const data = await response.json();
      onSuccess2(data);
      return data;
    },
    onError: () => {
      return toast.error("Failed to find details of this task");
    },
  });
};
export default useGetTask;
