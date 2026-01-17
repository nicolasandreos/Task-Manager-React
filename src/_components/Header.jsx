import Button from "./Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[#00ADB5]">Início</p>
        <p className="text-2xl font-semibold">Início</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="secondary">
          <FaRegTrashCan />
          Limpar Tarefas
        </Button>
        <Button>
          <FaPlus />
          Nova Tarefa
        </Button>
      </div>
    </div>
  );
};

export default Header;
