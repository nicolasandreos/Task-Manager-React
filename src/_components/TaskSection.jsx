import TaskItem from "./TaskItem";

const TaskSection = ({ children, tasks = [], onChangeCheckboxTask }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-text-gray flex items-center gap-1.5 border-b border-[#dddddd] pb-1 font-semibold">
        {children}
      </div>
      {tasks.map((task) => {
        return (
          <TaskItem onChangeCheckboxTask={onChangeCheckboxTask} task={task} />
        );
      })}
    </div>
  );
};

export default TaskSection;
