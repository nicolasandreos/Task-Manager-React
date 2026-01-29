import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import Header from "../_components/Header";
import Button from "../_components/Button";
import { IoTrashOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import InputLabel from "../_components/InputLabel";
import Input from "../_components/Input";
import Sidebar from "../_components/Sidebar";

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const handleClickBackPage = () => {
    console.log("ok");
    navigate(-1);
  };

  useEffect(() => {
    const fetchTaskById = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      if (!response.ok) {
        toast.error("Failed to find details of this task");
        return;
      }
      const task = await response.json();
      setTask(task);
    };

    fetchTaskById();
  }, [taskId]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex w-full flex-col gap-6 px-8.5">
        <Header
          subtitle={
            <p className="flex items-center gap-1">
              <span className="text-gray-400">Minhas Tarefas</span>
              <FaChevronRight />
              {task?.title}
            </p>
          }
          title={task?.title}
        >
          <Button color="danger">
            <IoTrashOutline />
            Deletar Tarefa
          </Button>

          <button
            onClick={handleClickBackPage}
            className="bg-primary absolute -top-12 left-0 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
          >
            <FaArrowLeft />
          </button>
        </Header>

        <div className="space-y-6 px-6">
          <Input placeholder={task?.title} label="Name" id={task?.title} />
          <Input placeholder={task?.period} label="Time" id={task?.period} />
          <Input
            placeholder={task?.description}
            label="Description"
            id={task?.description}
          />
        </div>

        <div className="flex gap-2.5 self-end">
          <Button size="large" color="tertiary">
            Cancel
          </Button>
          <Button size="large">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
