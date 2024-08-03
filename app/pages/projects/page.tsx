'use client'
import React from 'react';
import Pizzapalo from './pizzapalo';
import Distro from './distro';

const Projects = () => {
  return (
    <>
      <div className="pt-4 px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold pb-4 dark:text-slate-700">Projects:</h1>
      </div>
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            <Pizzapalo />
            <div className="pt-4">
              <h2 className="text-xl font-bold font-mono py-2 dark:text-slate-700">Pizzapalo</h2>
              <p className="text-gray-700">
                Pizzapalo is a responsive web application designed for pizza shops, offering users a seamless pizza customization experience. Built with Vite, React, and Tailwind CSS, this project showcases the power of objects, for loops, and other methods to create a dynamic and user-friendly interface. Whether it's choosing toppings or customizing crust options, Pizzapalo provides a flexible and adaptable solution to enhance any pizza shop's online ordering process.
              </p>
              <div className="grid grid-flow-col">
                <a href="https://github.com/RemyXVX/pizzashop" className="mt-4 text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md inline-block">
                  Code Base
                </a>
                <a href="" className="mt-4 text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md inline-block">Webpage</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Distro />
            <div className="pt-4">
              <h2 className="text-xl font-bold font-mono py-2 dark:text-slate-700">Coffee Distro</h2>
              <p className="text-gray-700">
                I am developing a full e-commerce web application using VSCode, JavaScript, Chakra UI, Tailwind, JSX, Node, React, Babel, and ESLint for the Doomed Coffee Shop. The website enables users to conveniently order their favorite coffee and treats online. The app includes a seamless ordering system where users can place orders, and with each sale, the quantity of coffee automatically decreases by 1. Additionally, I am implementing a comprehensive e-commerce solution, allowing users to create their own websites, place orders, and set up automatic order notifications when the coffee quantity runs low.
              </p>
              <div className="grid grid-flow-col">
                <a href="https://github.com/RemyXVX/Doomed-Coffe-Shop" className="mt-4 text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md inline-block">
                  Code Base
                </a>
                <a href="https://doomed-coffe-shop-gzhiv7zfe-remyxvxs-projects.vercel.app/" className="mt-4 text-rose-200 font-bold bg-slate-500 hover:bg-slate-300 hover:text-rose-300 py-2 px-4 rounded-md inline-block">Webpage</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;