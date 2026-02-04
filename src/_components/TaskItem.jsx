import { tv } from "tailwind-variants";
import Checkbox from "./Checkbox";
import { IoOpenOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import useDeleteTask from "../hooks/data/useDeleteTask";
import { useUpdateTask } from "../hooks/data/useUpdateTask";

const TaskItem = ({ task }) => {
  const { mutate: deleteTask, isPending } = useDeleteTask(task.id);

  const { mutate: updateTask } = useUpdateTask(task.id);

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

  return (
    <div className={`${taskItem({ status: task.status })}`}>
      <div className={`flex gap-4.5`}>
        <Checkbox task={task} updateTask={updateTask} />

        <p className="">{task.title}</p>
      </div>
      <div className="text-text-gray flex gap-3 text-xl">
        {isPending ? (
          <AiOutlineLoading3Quarters className="animate-spin text-gray-700" />
        ) : (
          <IoTrashOutline
            onClick={deleteTask}
            className="transition-all duration-200 hover:text-red-300"
          />
        )}
        <Link to={`/task/${task.id}`}>
          <IoOpenOutline />
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
