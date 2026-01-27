import { tv } from "tailwind-variants";
import Checkbox from "./Checkbox";
import { IoOpenOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { useState } from "react";

const TaskItem = ({ task, onChangeCheckboxTask, handleDeleteTask }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const taskItem = tv({
    base: "flex w-full items-center justify-between rounded-lg p-3",
    variants: {
      status: {
        done: "text-[#002C2E] bg-[#00f2ff1c]",
        in_progress: "bg-[#ffeabf54] text-process",
        to_do: "bg-[#d1d1d11c] text-[#002C2E]",
      },
    },
  });

  const handleDeleteClick = async (taskId) => {
    try {
      setIsDeleting(true);
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        toast.error("Failed to delete task");
        return;
      }
      await handleDeleteTask(taskId);
      setIsDeleting(false);
    } catch (error) {
      toast.error("An error occurred while deleting the task");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={`${taskItem({ status: task.status })}`}>
      <div className={`flex gap-4.5`}>
        <Checkbox task={task} onChangeCheckboxTask={onChangeCheckboxTask} />

        <p className="">{task.title}</p>
      </div>
      <div className="text-text-gray flex gap-3 text-xl">
        {isDeleting ? (
          <AiOutlineLoading3Quarters className="animate-spin text-gray-700" />
        ) : (
          <IoTrashOutline
            onClick={() => handleDeleteClick(task.id)}
            className="transition-all duration-200 hover:text-red-300"
          />
        )}

        <IoOpenOutline />
      </div>
    </div>
  );
};

export default TaskItem;
