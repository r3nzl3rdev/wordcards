import React from "react";
import Input from "./Input";
import Menu from "./Menu";
import { menuOptions } from "../config/menuConfig";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-between bg-green-primary">
      <div className="flex">
        <Menu options={menuOptions} />
        <Input placeholder="So'z qidirish..." />
      </div>
      <Button className="text-lg text-white hover:text-black hover:bg-gray-300">
        <p>Kirish</p>
      </Button>
    </div>
  );
};

export default Header;
