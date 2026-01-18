import Checkbox from "./Checkbox";

const TaskItem = ({ task, onChangeCheckboxTask }) => {
  const getVariantType = () => {
    switch (task.status) {
      case "done":
        return "text-[#002C2E] bg-[#00f2ff1c]";
      case "in_progress":
        return "bg-[#ffeabf54] text-[#c08000]";
      case "to_do":
        return "bg-[#d1d1d11c] text-[#002C2E]";
    }
  };

  return (
    <div
      className={`flex items-center gap-4.5 rounded-lg p-3 ${getVariantType()}`}
    >
      <Checkbox task={task} onChangeCheckboxTask={onChangeCheckboxTask} />

      <p className="">{task.title}</p>
    </div>
  );
};

export default TaskItem;
