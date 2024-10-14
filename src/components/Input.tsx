import React from "react";

interface InputProps {
  placeholder: string; // Define the type for the placeholder prop
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="text-lg px-4 py-2 max-w-[228px] focus:outline-none border-b border-green-800 border-opacity-30 placeholder:text-gray-600 placeholder:text-lg"
    />
  );
};

export default Input;
