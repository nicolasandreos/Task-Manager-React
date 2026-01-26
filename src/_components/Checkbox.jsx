import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { tv } from "tailwind-variants";

const Checkbox = ({ task, onChangeCheckboxTask }) => {
  const checkbox = tv({
    base: "relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-md p-1.5 transition-all duration-300",
    variants: {
      status: {
        done: "bg-[#34f1ff]",
        in_progress: "bg-amber-200",
        to_do: "bg-[#e0e0e0]",
      },
    },
  });

  return (
    <label htmlFor={task.id} className={`${checkbox({ status: task.status })}`}>
      <input
        type="checkbox"
        checked={task.status === "done"}
        onChange={() => onChangeCheckboxTask(task.id)}
        id={task.id}
        className="absolute h-full w-full cursor-pointer opacity-0"
      />

      {task.status === "in_progress" && (
        <AiOutlineLoading3Quarters className="animate-spin" />
      )}
      {task.status === "done" && <FaCheck className="text-white" />}
    </label>
  );
};

export default Checkbox;
