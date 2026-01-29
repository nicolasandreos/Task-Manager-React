import Sidebar from "./_components/Sidebar";
import Tasks from "./_components/Tasks";
import { useState } from "react";

function App() {
  const [isOpen, setIsOPen] = useState(false);

  const handleModalInteraction = () => {
    setIsOPen(!isOpen);
  };
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="w-full space-y-6 px-8">
          {/* TASKS */}
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
