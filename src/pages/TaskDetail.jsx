import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import Header from "../_components/Header";
import Button from "../_components/Button";
import { IoTrashOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../_components/Input";
import Sidebar from "../_components/Sidebar";

const TaskDetail = () => {
  const { taskId } = useParams();
  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const [task, setTask] = useState();
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleClickBackPage = () => {
    console.log("ok");
    navigate(-1);
  };

  const handleSaveTask = async () => {
    setIsSaving(true);
    setErrors({});
    const errorsList = {};
    const title = titleRef.current.value.trim();
    const time = dateRef.current.value.trim();
    const description = descriptionRef.current.value.trim();

    try {
      if (!title) {
        errorsList.title = "Title is required";
      }

      if (!time) {
        errorsList.time = "Time is required";
      }

      if (!description) {
        errorsList.description = "Description is required";
      }

      if (errorsList.title || errorsList.time || errorsList.description) {
        setErrors(errorsList);
        return;
      }

      const task = { title, period: time, description, status: "to_do" };

      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        toast.error("Failed to add task");
        return;
      }
      navigate(-1);
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteClick = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        return toast.error("Failed to delete task");
      }
      setIsDeleting(false);
      navigate(-1);
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("An error occurred while deleting the task");
    } finally {
      setIsDeleting(false);
    }
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
              <Link to="/">
                <span className="text-gray-400">Minhas Tarefas</span>
              </Link>
              <FaChevronRight />
              {task?.title}
            </p>
          }
          title={task?.title}
        >
          <Button
            onClick={handleDeleteClick}
            color="danger"
            disabled={isDeleting}
          >
            <IoTrashOutline />
            {isDeleting ? "Deleting..." : "Delete Task"}
          </Button>

          <button
            onClick={handleClickBackPage}
            className="bg-primary absolute -top-12 left-0 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
          >
            <FaArrowLeft />
          </button>
        </Header>

        <div className="space-y-6 px-6">
          <Input
            defaultValue={task?.title}
            ref={titleRef}
            placeholder={task?.title}
            label="Name"
            id={task?.title}
          />
          <Input
            defaultValue={task?.period}
            ref={dateRef}
            placeholder={task?.period}
            label="Time"
            id={task?.period}
          />
          <Input
            defaultValue={task?.description}
            ref={descriptionRef}
            placeholder={task?.description}
            label="Description"
            id={task?.description}
          />
        </div>

        <div className="flex gap-2.5 self-end">
          <Button size="large" color="tertiary" onClick={handleClickBackPage}>
            Cancel
          </Button>
          <Button onClick={handleSaveTask} disabled={isSaving} size="large">
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
