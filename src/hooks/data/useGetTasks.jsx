import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../../lib/axios";

const useGetTasks = () => {
  return useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const { data: tasks } = await api.get("/tasks");
      return tasks;
    },
  });
};

export default useGetTasks;
