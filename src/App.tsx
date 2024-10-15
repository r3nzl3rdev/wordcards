import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </>
  );
}

export default App;
