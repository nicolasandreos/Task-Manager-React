import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const Checkbox = ({ task, onChangeCheckboxTask }) => {
  const getCheckboxVariantType = () => {
    switch (task.status) {
      case "done":
        return "bg-[#34f1ff]";
      case "in_progress":
        return "bg-amber-200";
      case "to_do":
        return "bg-[#e0e0e0]";
    }
  };
  return (
    <label
      htmlFor={task.id}
      className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-md p-1.5 transition-all duration-300 ${getCheckboxVariantType()}`}
    >
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
