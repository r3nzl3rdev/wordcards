import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="p-4 md:p-8">
        <Outlet />
      </div>
    </>
  );
}

export default App;
