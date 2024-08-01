'use client'
import React, { useState } from "react";
import Navbar from "./../components/navbar";
import Image from "next/image";

import useDarkMode from "../components/useDarkMode";
import itsMeImage from "./../assets/images/itme.png";

import About from "./about/page";
import Projects from "./projects/page";
import Contacts from "./contact/page";

const Secondary: React.FC = () => {
  const isDarkMode = useDarkMode();
  const [currentView, setCurrentView] = useState("home");

  const renderContent = () => {
    switch (currentView) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contacts />;
      default:
        return (
          <div className="flex flex-col items-center">
            <div className="max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-16 p-4">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-center`}>
                hello
              </h2>
            </div>
            <div className="max-w-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-16 p-4">
              <Image
                src={itsMeImage}
                alt="Artificial Intelligence made self portrait of me, a very brown person with long flowy hair and some dark rim glasses"
                priority={true}
                className="mx-auto rounded-full"
              />
            </div>
            <div className="max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-16 p-4">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-center`}>
                world
              </h2>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 min-h-screen flex flex-col">
      <div className={`flex-1 bg-gray-100 dark:bg-slate-800 shadow-md`}>
        <Navbar onMenuClick={setCurrentView} />
        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Secondary;
