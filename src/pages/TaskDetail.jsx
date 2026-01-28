import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    const fetchTaskById = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      if (!response.ok) {
        toast.error("Failed to find details of this task");
        return;
      }
      const task = await response.json();
      setTask(task);
    };

    fetchTaskById();
  }, [taskId]);

  return (
    <p>
      {task?.description} {task?.id}
    </p>
  );
};

export default TaskDetail;
