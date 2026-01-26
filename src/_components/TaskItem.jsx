import Checkbox from "./Checkbox";

const TaskItem = ({ task, onChangeCheckboxTask, children }) => {
  const getVariantType = () => {
    switch (task.status) {
      case "done":
        return "text-[#002C2E] bg-[#00f2ff1c]";
      case "in_progress":
        return "bg-[#ffeabf54] text-process";
      case "to_do":
        return "bg-[#d1d1d11c] text-[#002C2E]";
    }
  };

  return (
    <div
      className={`flex w-full items-center justify-between rounded-lg p-3 ${getVariantType()}`}
    >
      <div className={`flex gap-4.5`}>
        <Checkbox task={task} onChangeCheckboxTask={onChangeCheckboxTask} />

        <p className="">{task.title}</p>
      </div>
      <div className="text-text-gray flex gap-3 text-xl">{children}</div>
    </div>
  );
};

export default TaskItem;
