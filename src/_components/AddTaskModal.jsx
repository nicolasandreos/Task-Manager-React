import { createPortal } from "react-dom";
import "./modalTransition.css";
import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Select from "./Select";
import { v4 } from "uuid";
import InputError from "./InputError";
import { toast } from "sonner";

const AddTaskModal = ({ isOpen, handleModalInteraction, onSubmitTask }) => {
  const nodeRef = useRef(null);
  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const [errors, setErrors] = useState({});
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleSubmitTask = async () => {
    setIsAddingTask(true);
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

      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        toast.error("Failed to add task");
        return;
      }

      onSubmitTask(task);

      handleModalInteraction();
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setIsAddingTask(false);
    }
  };

  const handleCancelModal = () => {
    setErrors({});
    handleModalInteraction();
  };

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-xs"
      >
        <div className="flex w-90 flex-col items-center justify-center rounded-xl bg-white p-5 shadow-xl">
          <div className="mb-4 flex flex-col gap-1 text-center">
            <h2 className="text-dark-blue text-2xl font-semibold">
              Add New Task
            </h2>
            <p className="text-text-gray font-light">
              Please fill the form below
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              id="title"
              ref={titleRef}
              placeholder="Title of the task"
            />
            {errors.title && <InputError message={errors.title} />}

            <Select ref={dateRef} />
            {errors.date && <InputError message={errors.date} />}

            <Input
              ref={descriptionRef}
              label="Description"
              id="description"
              placeholder="Description of the task"
            />
            {errors.description && <InputError message={errors.description} />}
          </div>

          <div className="mt-4 flex w-full justify-between gap-3">
            <Button
              onClick={handleCancelModal}
              className="w-full"
              size="large"
              color="tertiary"
            >
              Cancel
            </Button>
            <Button
              disabled={isAddingTask}
              onClick={handleSubmitTask}
              className="w-full"
              size="large"
            >
              {isAddingTask ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default AddTaskModal;
