import React, { useState } from "react";
import Button from "./Button";

interface Option {
  title: string;
  route: string;
}

interface MenuProps {
  options: Option[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  return (
    <div className="flex w-full items-center justify-between group text-white hover:text-black hover:bg-gray-300">
      <Button className="gap-1" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
        <p className="text-md hidden sm:flex">Menu</p>
      </Button>
      <div className="absolute hidden group-hover:flex flex-col left-0 top-[45px] bg-white shadow-lg shadow-gray-400 text-md">
        {options.map((option, index) => (
          <div
            key={index}
            className="p-2 hover:cursor-pointer hover:bg-gray-300"
          >
            <p className="whitespace-nowrap">{option.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
