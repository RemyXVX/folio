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
    <nav className="bg-sky-800 dark:bg-slate-800 p-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between md:justify-evenly">
        <Link href="/" passHref>
          <span className="flex items-center">
            <Image
              src={corgiRamen}
              className="w-auto h-auto max-h-12 max-w-full"
              alt="Corgi eating ramen logo"
            />
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-500 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-slate-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
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
          )}
        </button>
        <div
          id="navbar-menu"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full right-0 w-48 bg-sky-800 dark:bg-slate-800 rounded-b-lg shadow-xl md:shadow-none md:relative md:w-auto md:flex md:space-x-4`}
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 p-2 md:p-0">
            {menuList.map((item, index) => (
              <a
                key={index}
                href={`/?view=${item.view}`}
                onClick={(e) => {
                  e.preventDefault();
                  onMenuClick(item.view);
                }}
                className="block py-2 px-4 rounded-sm font-medium text-gray-100 dark:text-gray-100 hover:bg-sky-600 dark:hover:bg-slate-700 md:hover:bg-transparent md:hover:text-gray-100 md:dark:hover:text-white"
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