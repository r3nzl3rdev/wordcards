import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ id, label, className, ...props }) => {
  return (
    <div className="flex flex-col">
      {id && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={`text-lg px-4 py-2 focus:outline-none border border-gray-500 border-opacity-30 placeholder:text-gray-600 placeholder:text-lg ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
