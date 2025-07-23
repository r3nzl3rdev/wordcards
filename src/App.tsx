import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { SearchProvider } from "./config/SearchContext";


const App: React.FC = () => {
  return (
    <SearchProvider>
      <Header />
      <div className="p-4 md:p-8 mt-12">
        <Outlet />
      </div>
    </SearchProvider>
  );
}

export default App;
