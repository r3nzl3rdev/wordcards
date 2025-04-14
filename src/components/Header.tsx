import React, { useEffect, useState } from "react";
import Input from "./Input";
import Menu from "./Menu";
import { menuOptions, authRoutes } from "../config/menuConfig";
import Button from "./Button";
import { Link } from "react-router-dom";
import { getGmailUsername } from "../utils";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("")
  const [isAuth, setIsAuth] = useState(false)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      if (searchTerm.trim().includes(" ")) {
        alert("faqat bitta so'z kiriting");
      } else {
        window.open(`/en/${searchTerm.trim()}`, "_self");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const email = localStorage.getItem("email")

    if (token && email) {
      const username = getGmailUsername(email)
      setUsername(username)
      setIsAuth(true)
    }
  }, [])


  return (
    <div className="flex w-full justify-between bg-green-primary fixed top-0 z-10">
      <div className="flex">
        <Menu options={menuOptions} itemsPosition="left">
          <i className="fa-solid fa-bars"></i>
          <p className="text-md hidden sm:flex">Menu</p>
        </Menu>
        <Input
          placeholder="So'z qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      {
        isAuth ?
          <Menu options={authRoutes} itemsPosition="right">
            <i className="fa-solid fa-user text-sm"></i>
            <p className="hidden sm:flex">{username}</p>
            <i className="fa-solid fa-caret-down text-2xl sm:text-lg"></i>
          </Menu>
          :
          <Link to="/login">
            <Button className="text-lg h-full text-white active:text-black active:bg-gray-300 lg:hover:text-black lg:hover:bg-gray-300">
              <p>Kirish</p>
            </Button>
          </Link>
      }
    </div>
  );
};

export default Header;
