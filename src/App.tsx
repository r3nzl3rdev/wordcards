import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { SearchProvider } from "./config/SearchContext";
import { ToastContainer, Bounce } from "react-toastify";
import { AuthProvider } from "./config/AuthContext";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Header />
        <div className="p-4 md:p-8 mt-12">
          <Outlet />
        </div>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
