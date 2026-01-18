import TaskItem from "./TaskItem";

const TaskSection = ({ children, tasks, onChangeCheckboxTask }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-1.5 border-b border-[#dddddd] pb-1 font-semibold text-[#9A9C9F]">
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
