import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="p-2 md:p-8 mt-12">
        <Outlet />
      </div>
    </>
  );
}

export default App;
