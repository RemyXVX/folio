import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
    <div className="text-left" id="about">About Me</div>
    <div>
      <div className="mt-14">
        <div className="max-w-3xl mx-auto px-1 py-1 sm:py-2 md:py-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome!
          </h1>
          <div>
            <div>
              <h2 className="text-gray-700 text-lg sm:text-xl md:text-2xl font-medium mb-1">
                My name is Remy! I'am a Full Stack Developer
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-1">
                Allow me to introduce myself as a full-stack developer extraordinaire! With an unwavering passion for crafting innovative solutions, I possess an innate ability to build projects from the ground up. Seamlessly blending front-end wizardry with cutting-edge and interactive UI, I orchestrate a symphony of features driven by my back-end prowess. Equipped with a versatile skill set encompassing ReactJS, NodeJS, and Asp.Net Core, I breathe life into dynamic applications, crafting digital marvels with utmost finesse. Join me on an exhilarating journey where innovation and functionality harmoniously intertwine!
              </p>
            </div>
            <div className="pt-4">
              <h2 className="text-4xl font-bold pb-4">Tech Stack</h2>
              <div className="">
                <TechStack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;
