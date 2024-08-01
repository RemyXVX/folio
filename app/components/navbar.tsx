import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import corgiRamen from "./../assets/images/corgiramen.png";

interface NavProps {
  onMenuClick: (view: string) => void;
}

const menuList = [
  { text: "Home", href: "home" },
  { text: "About", href: "about" },
  { text: "Projects", href: "projects" },
  { text: "Contact", href: "contact" },
];

const Navbar: React.FC<NavProps> = ({ onMenuClick }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-300 bg-slate-500 text-rose-200 font-extrabold text-lg rounded-b-xl py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <span className="flex items-center">
            <Image
              src={corgiRamen}
              className="w-auto h-auto max-h-8 max-w-full mr-3"
              alt="Corgi eating ramen logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Remy
            </span>
          </span>
        </Link>
        <div className="flex flex-col font-medium mt-4 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
          {menuList.map((item, index) => (
            <button
              key={index}
              onClick={() => onMenuClick(item.href)}
              className="block py-2 px-6 rounded-lg hover:bg-gray-400 hover:text-slate-200"
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;