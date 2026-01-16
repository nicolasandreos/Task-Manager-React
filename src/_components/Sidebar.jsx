import SidebarButton from "./SidebarButton";
import { AiFillHome } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="min-h-screen max-w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p className="text-sm">
          Um simples{" "}
          <span className="font-semibold text-[#00ADB5]">
            organizador de tarefas
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2 px-2">
        <SidebarButton variant="selected">
          <div className="flex items-center gap-2 font-normal">
            <AiFillHome />
            Início
          </div>
        </SidebarButton>
        <SidebarButton>
          <div className="flex items-center gap-2 font-normal">
            <FaTasks />
            Minhas Tarefas
          </div>
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
