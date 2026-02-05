import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Button from "./_components/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import useDeleteAllTasks from "./hooks/data/useDeleteAllTasks";
import useGetTasks from "./hooks/data/useGetTasks";
import AddTaskModal from "./_components/AddTaskModal";
import DashboardCard from "./_components/DashboardCard";
import { GrTasks } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import TaskItem from "./_components/TaskItem";

function App() {
  const [isOpen, setIsOPen] = useState(false);
  const { mutate: deleteAllTasks } = useDeleteAllTasks();
  const { data: tasks } = useGetTasks();
  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };

  const completedTasks =
    tasks?.filter((task) => task.status === "done").length || 0;
  const pendingTasks =
    tasks?.filter((task) => task.status === "in_progress").length || 0;
  const toDoTasks =
    tasks?.filter((task) => task.status === "to_do").length || 0;

  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full space-y-6 px-8.5">
        <Header title="Home" subtitle="Home">
          <Button onClick={() => deleteAllTasks(tasks)} color="secondary">
            <FaRegTrashCan />
            Clean Tasks
          </Button>
          <Button onClick={handleModalInteraction}>
            <FaPlus />
            New Task
          </Button>
        </Header>

        <div className="flex w-full justify-between">
          <DashboardCard
            title={tasks?.length || 0}
            description="Available Tasks"
            icon={<GrTasks />}
          />
          <DashboardCard
            title={completedTasks}
            description="Completed Tasks"
            icon={<FaTasks />}
          />
          <DashboardCard
            title={pendingTasks}
            description="Pending Tasks"
            icon={<AiOutlineLoading3Quarters />}
          />
          <DashboardCard
            title={toDoTasks}
            description="To-Do Tasks"
            icon={<LuListTodo />}
          />
        </div>

        <div className="flex justify-between">
          <div className="w-full space-y-6 rounded-2xl bg-white p-6">
            <div>
              <h3 className="text-[20px] font-semibold">Tasks</h3>
              <p className="text-text-gray">Resume of Available Tasks</p>
            </div>

            <div className="flex flex-col gap-3">
              {tasks?.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AddTaskModal
        handleModalInteraction={handleModalInteraction}
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
