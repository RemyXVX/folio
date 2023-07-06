import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import corgiRamen from "./../assets/images/corgiramen.png";
import navbar from "./../assets/styles/navbar.module.css";

const menuList = [
  {
    text: "Home",
    href: "/#home",
  },
  {
    text: "About",
    href: "/#about",
  },
  {
    text: "Projects",
    href: "/#projects",
  },
  {
    text: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id={navbar.navbar}
      className="border-gray-300 bg-slate-500 text-rose-200 font-extrabold text-lg rounded-r-3xl py-2"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} passHref>
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
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-300 focus:text-gray-300 rounded-lg md:hidden hover:bg-rose-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <div
            id="menuList"
            ref={menuRef}
            className={`flex flex-col font-medium mt-4 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent`}
          >
            {menuList.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <span className="block py-2 px-6 rounded-lg hover:bg-gray-400 hover:text-slate-200">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
