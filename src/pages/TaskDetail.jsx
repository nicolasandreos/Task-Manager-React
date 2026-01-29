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
import { useForm } from "react-hook-form";
import InputError from "../_components/InputError";
import Select from "../_components/Select";

const TaskDetail = () => {
  const { taskId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const [task, setTask] = useState();
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleSaveTask = async (data) => {
    try {
      const task = {
        title: data.title.trim(),
        period: data.period.trim(),
        description: data.description.trim(),
        status: data.status,
      };

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
      reset(task);
    };

    fetchTaskById();
  }, [taskId, reset]);

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
            onClick={() => navigate(-1)}
            className="bg-primary absolute -top-12 left-0 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
          >
            <FaArrowLeft />
          </button>
        </Header>

        <form
          onSubmit={handleSubmit(handleSaveTask)}
          className="flex flex-col gap-6 px-6"
        >
          <Input
            {...register("title", {
              required: "Title is required",
              validate: (value) =>
                value.trim() !== "" || "Title cannot be empty",
            })}
            placeholder="Task name"
            label="Name"
            id={task?.title}
          />
          {errors.title && <InputError message={errors.title.message} />}

          <Select
            {...register("period", {
              required: "Time is required",
              validate: (value) =>
                value.trim() !== "" || "Period cannot be empty",
            })}
            placeholder="Task period"
            label="Time"
            id={task?.period}
          />
          {errors.period && <InputError message={errors.period.message} />}

          <Input
            {...register("description", {
              required: "Description is required",
              validate: (value) =>
                value.trim() !== "" || "Description cannot be empty",
            })}
            placeholder="Task description"
            label="Description"
            id={task?.description}
          />
          {errors.description && (
            <InputError message={errors.description.message} />
          )}
          <div className="flex gap-2.5 self-end">
            <Button size="large" color="tertiary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button disabled={isSubmitting} size="large" type="submit">
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
