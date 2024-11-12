'use client'
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion"; 
import itsMeImage from "./../../assets/images/itme.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-8 bg-gray-100 dark:bg-slate-800">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src={itsMeImage}
          alt="AI made self portrait of me"
          priority={true}
          className="rounded-full shadow-2xl object-cover"
          width={515}
          height={515}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className="flex flex-col items-center md:items-start space-y-8 md:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-right"
        >
          <h2 className="px-6 text-[16vw] md:text-[10vw] font-extrabold text-gray-800 dark:text-gray-200 leading-none">
            hello
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center md:text-right"
        >
          <h2 className="px-6 text-[16vw] md:text-[10vw] font-extrabold text-gray-800 dark:text-gray-200 leading-none">
            world
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
