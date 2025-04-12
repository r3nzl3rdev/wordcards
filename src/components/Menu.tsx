import React, { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

interface Option {
  title: string;
  route: string;
}

interface MenuProps {
  options: Option[];
  children?: ReactNode; // Allow full button content via children
}

const Menu: React.FC<MenuProps> = ({ options, children }) => {
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`${isMenuOpen ? "bg-gray-300 text-black" : "text-white"} relative flex items-center justify-between lg:hover:text-black lg:hover:bg-gray-300 lg:active::bg-gray-300`}
    >
      <Button className="gap-1 h-full" onClick={toggleMenu} onMouseOver={() => setIsMenuOpen(true)} onMouseOut={() => setIsMenuOpen(false)}>
        {children}
      </Button>
      {isMenuOpen && (
        <div className="absolute flex flex-col left-0 top-[45px] bg-white text-black shadow-lg shadow-gray-400 text-md"
          onMouseOver={() => setIsMenuOpen(true)} onMouseOut={() => setIsMenuOpen(false)}>
          {options.map((option, index) => (
            <Link
              to={option.route}
              key={index}
              className="p-2 hover:cursor-pointer hover:bg-gray-300"
              onClick={toggleMenu}
            >
              <p className="whitespace-nowrap">{option.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
