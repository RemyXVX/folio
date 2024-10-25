'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import corgiRamen from './../assets/images/corgiramen.png';

interface NavbarProps {
  onMenuClick: (view: string) => void;
}

const menuList = [
  { text: 'Home', view: 'home' },
  { text: 'About', view: 'about' },
  { text: 'Projects', view: 'projects' },
  { text: 'Contact', view: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-sky-800 dark:bg-slate-800 p-4 shadow-lg relative z-50">
      <div className="container mx-auto flex items-center justify-between md:justify-evenly h-20">
        <Link href="/" passHref>
          <span className="flex items-center cursor-pointer">
            <Image
              src={corgiRamen}
              alt="Corgi eating ramen logo"
              priority={true}
              className="h-14 w-auto rounded-full"
            />
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-200 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none transition-colors duration-200"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5h18M3 12h18M3 19h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <div
          id="navbar-menu"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full right-0 mt-2 w-52 bg-sky-800 dark:bg-slate-800 rounded-lg shadow-lg md:shadow-none md:relative md:top-0 md:w-auto md:flex md:items-center md:space-x-6 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 p-3 md:p-0">
            {menuList.map((item, index) => (
              <a
                key={index}
                href={`/?view=${item.view}`}
                onClick={(e) => {
                  e.preventDefault();
                  onMenuClick(item.view);
                }}
                className="block py-2 px-4 text-lg font-medium text-gray-100 hover:bg-sky-600 dark:hover:bg-slate-600 rounded-lg md:rounded-none md:hover:text-sky-400 dark:md:hover:text-gray-200 transition-all duration-200 ease-in-out"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
