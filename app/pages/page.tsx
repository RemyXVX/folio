'use client'
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
        <div id="home" className="bg-gray-100 py-8 rounded-3xl">
          <Navbar />
          <div className="justify-center">
            <div>
              <h1 id="gradient-text" className={helloworld.helloworld}>
                hello world!
              </h1>
            </div>
            <div>
              <Image
                src={itsMeImage}
                className="mt-10 mb-10 mx-auto rounded-full"
                alt="Artificial Intelligence made self portrait of me, a very brown person with long flowly hair and some dark rim glasses"
              />
            </div>
            <div className="text-center">
              <About />
              <Projects />
              <Contacts />
            </div>
          </div>
        </div>
    </>
  );
};

export default Secondary;

