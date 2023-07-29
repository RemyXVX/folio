"use client"
import React, { useEffect, useState } from 'react';
import Pizzapalo from './pizzapalo';
import Distro from './distro';

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Set initial screen size
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <div className="text-left" id="projects" />
      <div className="pt-4">
        <h1 className="text-4xl font-bold pb-4 dark:text-slate-700">Projects:</h1>
      </div>
      <div className="pt-4 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <Pizzapalo />
          </div>
          <div className="pt-4">
            <h1 className="text-xl font-bold font-mono py-4 dark:text-slate-700">Pizzapalo</h1>
            <div className={`${isSmallScreen ? 'h-[150px] overflow-auto' : ''} text-center`}>
              <p className="text-gray-700">
                Pizzapalo is a responsive web application designed for pizza shops, offering users a seamless pizza customization experience. Built with Vite, React, and Tailwind CSS, this project showcases the power of objects, for loops, and other methods to create a dynamic and user-friendly interface. Whether it's choosing toppings or customizing crust options, Pizzapalo provides a flexible and adaptable solution to enhance any pizza shop's online ordering process.
              </p>
            </div>
            <div className="mt-4">
              <a href="https://github.com/RemyXVX/pizzashop" className="text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md">
                Click me
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Distro />
          </div>
          <div className="pb-4">
            <h1 className="text-xl font-bold font-mono py-4 dark:text-slate-700">Coffee Distro</h1>
            <div className={`${isSmallScreen ? 'h-[150px] overflow-auto' : ''} text-center`}>
              <p className="text-gray-700">
                I am developing a full e-commerce web application using VSCode, JavaScript, Chakra UI, Tailwind, JSX, Node, React, Babel, and ESLint for the Doomed Coffee Shop. The website enables users to conveniently order their favorite coffee and treats online. The app includes a seamless ordering system where users can place orders, and with each sale, the quantity of coffee automatically decreases by 1. Additionally, I am implementing a comprehensive e-commerce solution, allowing users to create their own websites, place orders, and set up automatic order notifications when the coffee quantity runs low.
              </p>
            </div>
            <div className="mt-4">
              <a href="https://github.com/RemyXVX/Doomed-Coffe-Shop" className="text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md">
                Click me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
