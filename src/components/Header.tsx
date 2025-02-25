import React, { useState } from "react";
import Input from "./Input";
import Menu from "./Menu";
import { menuOptions } from "../config/menuConfig";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      if (searchTerm.trim().includes(" ")) {
        alert("faqat bitta so'z kiriting");
      } else {
        window.open(`/en/${searchTerm.trim()}`, "_self");
      }
    }
  };

  return (
    <div className="flex w-full justify-between bg-green-primary fixed top-0 z-10">
      <div className="flex">
        <Menu options={menuOptions} />
        <Input 
          placeholder="So'z qidirish..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyDown={handleKeyPress} 
        />
      </div>
      <Link to="/login">
        <Button className="text-lg h-full text-white active:text-black active:bg-gray-300 lg:hover:text-black lg:hover:bg-gray-300">
          <p>Kirish</p>
        </Button>
      </Link>
    </div>
  );
};

export default Header;
