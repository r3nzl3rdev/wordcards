import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`flex items-center px-5 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
