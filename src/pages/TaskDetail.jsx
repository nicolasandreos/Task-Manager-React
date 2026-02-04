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
import { useUpdateTask } from "../hooks/data/useUpdateTask";
import useGetTask from "../hooks/data/useGetTask";
import useDeleteTask from "../hooks/data/useDeleteTask";

const TaskDetail = () => {
  const { taskId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const navigate = useNavigate();

  const { data: task } = useGetTask(taskId, (data) => reset(data));
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask(taskId);
  const { mutate: updateTask } = useUpdateTask(taskId);

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
            onClick={() =>
              deleteTask(undefined, {
                onSuccess: () => {
                  toast.success("Task deleted successfully");
                  navigate(-1);
                },
                onError: () => {
                  toast.error("Failed to delete task");
                },
              })
            }
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
          onSubmit={handleSubmit(updateTask)}
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
