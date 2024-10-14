import React from "react";

interface Option {
  title: string;
  route: string;
}

interface MenuProps {
  options: Option[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
  return (
    <div className="flex w-full items-center justify-between group text-white hover:text-black hover:bg-gray-300">
      <div className="flex gap-1 items-center px-5 ">
        <i className="fa-solid fa-bars"></i>
        <p className="text-md">Menu</p>
      </div>
      <div className="absolute hidden group-hover:flex flex-col left-0 top-10 bg-white shadow-lg shadow-gray-400 text-md">
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
