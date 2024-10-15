import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full min-h-screen justify-center items-center mt-[-3%]">
      <h1 className="text-2xl">Sahifa Topilmadi!</h1>
      <Link to="/" className="bg-green-primary text-white py-2 px-4 text-lg">
        Bosh Sahifa
      </Link>
    </div>
  );
};

export default ErrorPage;
