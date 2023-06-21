'use client'

import React, { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import helloworld from "./../styles/helloworld.module.css"
import underconstruct from "./../styles/underconstruct.module.css"
import underConstructImage from "./../../public/underconstruct.png"

const Secondary = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonClickForward = () => {
    setButtonClicked(true);
  };

  const buttonClickBack = () => {
    setButtonClicked(false);
  };
  

  return (
    <>
      <div className="justify-center">
        {buttonClicked ? (
          <div className="justify-center">
            <h1 id="gradient-text" className={helloworld.helloworld}>hello world!</h1>
            <Navbar />
            <button onClick={buttonClickBack} className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">The Void</button>
          </div>
        ) : (
          <div className="grid justify-center">
            <div className="text-center mt-3.5">
              <h1 className="font-extrabold text-6xl text-violet-400">Under construction</h1>
              <p className="mt-10 font-bold text-violet-400">Will have something rad for you very soon!</p>
            </div>
            <div className="md:pr-4">
              <Image src={underConstructImage} id={underconstruct.underconstruct} className="mt-10 mx-auto" alt="brownish corgie with their friend an orange with red striped cat sitting on a couch playing video games" />
            </div>
            <button onClick={buttonClickForward} className="mt-32 px-4 pt-2 font-medium text-gray-200 bg-purple-300 rounded-lg hover:bg-pink-300 hover:text-blue-300">The Void</button>
          </div>
        )} 
      </div>
    </>
  )
}

export default Secondary;