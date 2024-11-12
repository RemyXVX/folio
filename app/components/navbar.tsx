'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import corgiRamen from './../assets/images/corgiramen.png';
import useStoredState from './hooks/saveState';

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
  const [lastPage, setLastPage] = useStoredState<string>('lastPage', '/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('navbar-menu');
      const button = document.getElementById('menu-button');
      if (
        menu &&
        !menu.contains(event.target as Node) &&
        !button?.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setLastPage(window.location.pathname);
    setIsMenuOpen(false);
  }, [setLastPage]);

  const handleLinkClick = (view: string) => {
    setLastPage(view);
    onMenuClick(view);
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    setLastPage('/');
    onMenuClick('home');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-sky-800 dark:bg-slate-800 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <span
            className="flex items-center cursor-pointer"
            onClick={handleHomeClick}
          >
            <Image
              src={corgiRamen}
              alt="Corgi eating ramen logo"
              priority={true}
              className="h-12 w-auto md:h-14 rounded-full"
            />
          </span>

          <button
            id="menu-button"
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 text-gray-200 rounded-lg md:hidden hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors duration-200"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
            id="navbar-menu"
            className={`absolute top-16 md:top-auto left-0 right-0 md:relative md:flex md:items-center bg-sky-800 dark:bg-slate-800 md:bg-transparent transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              {menuList.map((item, index) => (
                <Link
                  key={index}
                  href={`/?view=${item.view}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.view);
                  }}
                  className="group block w-full md:w-auto"
                >
                  <div className={`py-2 px-4 text-lg font-medium text-gray-100 rounded-lg`}>
                    {item.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;