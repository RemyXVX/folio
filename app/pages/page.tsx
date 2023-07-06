"use client"
import React from "react";
import Navbar from "./../components/navbar";
import Image from "next/image";

import helloworld from "./../assets/styles/helloworld.module.css";
import itsMeImage from "./../assets/images/itme.png";
import About from "./about/page";
import Projects from "./projects/page";
import Contacts from "./contact/page";

const Secondary = () => {
  return (
    <>
      <div id="home" className="py-2 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-64">
        <div className="bg-gray-100 pt-3 rounded-3xl">
            <Navbar />
          <div className="justify-center">
            <div>
              <div className="max-w-3xl mx-auto px-4 py-2 sm:py-4 md:py-6">
                <h1 id="gradient-text" className={helloworld.helloworld}>
                  hello world!
                </h1>
              </div>
              <div className="max-w-3xl mx-auto px-4 py-2 sm:py-4 md:py-6">
                <Image
                  src={itsMeImage}
                  alt="Artificial Intelligence made self portrait of me, a very brown person with long flowly hair and some dark rim glasses"
                  priority={true}
                  className="mx-auto rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
              <About />
              <Projects />
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondary;
