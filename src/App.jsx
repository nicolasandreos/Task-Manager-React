import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="w-full px-8 pt-16">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
