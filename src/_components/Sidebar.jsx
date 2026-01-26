import SidebarButton from "./SidebarButton";
import { AiFillHome } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-90 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-primary text-xl font-semibold">Task Manager</h1>
        <p className="text-sm">
          A simple{" "}
          <span className="text-primary font-semibold">task manager</span>
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2 px-2">
        <SidebarButton>
          <div className="flex items-center gap-2 font-normal">
            <AiFillHome />
            Home
          </div>
        </SidebarButton>
        <SidebarButton variant="selected">
          <div className="flex items-center gap-2 font-normal">
            <FaTasks />
            My Tasks
          </div>
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
