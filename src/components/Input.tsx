import React from "react";

interface InputProps {
  placeholder?: string;
  label?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, label, id }) => {
  return (
    <div className="flex flex-col">
      {id && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        placeholder={placeholder}
        className="text-lg px-4 py-2 focus:outline-none border border-green-800 border-opacity-30 placeholder:text-gray-600 placeholder:text-lg"
      />
    </div>
  );
};

export default Input;
