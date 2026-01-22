import { createPortal } from "react-dom";
import "./modalTransition.css";
import Input from "./Input";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Select from "./Select";

const AddTaskModal = ({ isOpen, handleModalInteraction }) => {
  const nodeRef = useRef(null);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle("");
    setTime("morning");
    setDescription("");
  }, []);

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
            <h2 className="text-2xl font-semibold text-[#35383E]">
              Add New Task
            </h2>
            <p className="font-light text-[#9A9C9F]">
              Please fill the form below
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Input
              onChange={(event) => setTitle(event.target.value)}
              label="Title"
              id="title"
              placeholder="Title of the task"
              value={title}
            />
            <Select
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <Input
              onChange={(event) => setDescription(event.target.value)}
              label="Description"
              id="description"
              placeholder="Description of the task"
              value={description}
            />
          </div>

          <div className="mt-4 flex w-full justify-between gap-3">
            <Button
              onClick={handleModalInteraction}
              className="w-full"
              size="large"
              variant="tertiary"
            >
              Cancel
            </Button>
            <Button className="w-full" size="large">
              Save
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default AddTaskModal;
