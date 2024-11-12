'use client';
import React, { useState } from "react";
import Navbar from "./../components/navbar";
import Footer from "../components/footer";
import useRenderContent from "../components/hooks/userRenderContent";

const Secondary = () => {
  const [currentView, setCurrentView] = useState("home");
  const renderContent = useRenderContent(currentView);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-slate-800">
      <div className="flex-shrink-0">
        <Navbar onMenuClick={setCurrentView} />
      </div>
      <div className="flex-grow overflow-auto">
        {renderContent()}
      </div>
      <div className="flex-shrink-0">
        <Footer setCurrentView={setCurrentView} />
      </div>
    </div>
  );
};

export default Secondary;
