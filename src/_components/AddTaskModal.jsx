import { createPortal } from "react-dom";
import "./modalTransition.css";
import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const AddTaskModal = ({ isOpen, handleModalInteraction }) => {
  const nodeRef = useRef(null);

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
            <Input label="Title" id="title" placeholder="Title of the task" />
            <Input label="Hour" id="hour" placeholder="Select" />
            <Input
              label="Description"
              id="description"
              placeholder="Description of the task"
            />
          </div>
          <div className="mt-4 flex justify-between gap-3">
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
