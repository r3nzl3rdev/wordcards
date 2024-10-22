import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App: React.FC= ()=> {
  return (
    <>
      <Header />
      <div className="p-4 md:p-8 mt-12">
        <Outlet />
      </div>
    </>
  );
}

export default App;
