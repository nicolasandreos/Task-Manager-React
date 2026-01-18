import TaskItem from "./TaskItem";
import { IoOpenOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

const TaskSection = ({
  children,
  tasks,
  onChangeCheckboxTask,
  handleDeleteTask,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-1.5 border-b border-[#dddddd] pb-1 font-semibold text-[#9A9C9F]">
        {children}
      </div>
      {tasks.map((task) => {
        return (
          <TaskItem onChangeCheckboxTask={onChangeCheckboxTask} task={task}>
            <IoTrashOutline
              onClick={() => handleDeleteTask(task.id)}
              className="transition-all duration-200 hover:text-red-300"
            />
            <IoOpenOutline />
          </TaskItem>
        );
      })}
    </div>
  );
};

export default TaskSection;
