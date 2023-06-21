'use client'
import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router'

import Image from "next/image";
import Link from "next/link";
import corgiRamen from "./../../public/corgiramen.png"
import navbar from './../styles/navbar.module.css';


const menuList = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "About",
    href: "/components/about"
  },
  {
    text: "Contact",
    href: "/components/contact"
  },
  {
    text: "Projects",
    href: "/components/projects"
  },
];

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  // const router = useRouter();

  // const buttonClickBack = () => {
  //   router.push('/');
  // };

  // const handleMenu = () => {
  //   const menu = menuRef.current;
  //   if (menu) {
  //     menu.classList.toggle("hidden");
  //   }
  // };

  return(
    <>
      <nav id={navbar.navbar} 
        className="border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center" href={"/"}>
            <Image
              src={corgiRamen}
              // onClick={buttonClickBack}
              className="w-auto h-auto max-h-8 max-w-full mr-3"
              alt="Corgi eating ramen logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Remy
            </span>
          </Link>
          <button 
            data-collapse-toggle="navbar-solid-bg" 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-solid-bg" 
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-6 h-6" 
              aria-hidden="true" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <div
              id="menuList"
              ref={menuRef}
              className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
            >
              {menuList.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}>
                    <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >{item.text}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar;
