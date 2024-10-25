import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="w-full max-w-screen-xl bg-gray-100 dark:bg-slate-800 py-2 px-4 rounded-lg">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 text-gray-900 dark:text-slate-200 text-center">
          Hi! Welcome
        </h1>
        <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-lg space-y-2">
          <h2 className="text-gray-700 dark:text-slate-300 text-lg sm:text-xl md:text-2xl font-semibold">
            How are y'all doing? I'm Remy
          </h2>
          <p className="text-gray-700 dark:text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          Let me break it down – I'm a developer who loves to create things
            that work, flow, and look cute. I bring front-end magic to life with
            interactive UIs and back-end muscle to handle the heavy lifting.
            From ReactJS and NodeJS to ASP.NET Core, I’m out here building apps
            that not only get the job done but leave a mark. Stick around, and
            let's cook up something that blends tech with a fresh vibe.
          </p>
        </div>
      </div>
      <div className="w-full max-w-screen-xl bg-gray-100 dark:bg-slate-800 py-2 px-4 rounded-lg">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-slate-200 text-center pb-4">
          My Tech Stack
        </h2>
        <div className="max-h-64 overflow-y-auto bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default About;
