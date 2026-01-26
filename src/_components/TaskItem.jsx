import { tv } from "tailwind-variants";
import Checkbox from "./Checkbox";

const TaskItem = ({ task, onChangeCheckboxTask, children }) => {
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
        <Checkbox task={task} onChangeCheckboxTask={onChangeCheckboxTask} />

        <p className="">{task.title}</p>
      </div>
      <div className="text-text-gray flex gap-3 text-xl">{children}</div>
    </div>
  );
};

export default TaskItem;
