import React, { useEffect, useState } from "react";
import Input from "./Input";
import Menu from "./Menu";
import { menuOptions, authRoutes } from "../config/menuConfig";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSearch } from "../config/SearchContext";
import { toast } from 'react-toastify';
import { useAuth } from "../config/AuthContext";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [username, setUsername] = useState("")
  const { user } = useAuth();
  // const { setUser } = useAuth();
  const [isAuth, setIsAuth] = useState(false)
  const { searchedWord } = useSearch();
  const [email, setEmail] = useState("")

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      if (searchTerm.trim().includes(" ")) {
        toast.error("faqat bitta so'z kiriting");
      } else {
        const word = searchTerm.trim();
        window.open(`/en/${word}`, "_self");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const email = localStorage.getItem("email")

    if (token && email) {
      setIsAuth(true)
      setEmail(email)
    }
  }, [user])

  useEffect(() => {
    if (searchedWord) {
      setSearchTerm(searchedWord);
    }
  }, [searchedWord]);

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
            <i className="fa-solid fa-user text-lg sm:text-sm"></i>
            <p className="hidden sm:flex">{user?.email || email}</p>
            <i className="fa-solid fa-caret-down text-lg"></i>
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
