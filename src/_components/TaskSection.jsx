import TaskItem from "./TaskItem";

const TaskSection = ({ children, tasks = [] }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-text-gray flex items-center gap-1.5 border-b border-[#dddddd] pb-1 font-semibold">
        {children}
      </div>
      {tasks.map((task) => {
        return <TaskItem task={task} />;
      })}
    </div>
  );
};

export default TaskSection;
