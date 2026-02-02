import { useState } from "react";
import TaskItem from "./TaskItem";
import { IoOpenOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";

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
