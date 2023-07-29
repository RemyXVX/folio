"use client"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from "react";
import Link  from 'next/link';
import Form from './form';

const Contact = () => {
  return (
    <>
      <div id="contact" className="text-left" />
      <div className="mt-14">
        <div className="max-w-3xl mx-auto px-1 py-1 sm:py-2 md:py-3">
          <div className="grid grid-col-2">
            <div className="col-span-1">
              <Form />
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-5">
                <span className='col-span-1' />
                <Link href="https://github.com/RemyXVX" className="btn col-span-1 py-3 flex justify-center dark:text-slate-700">
                  <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                </Link>
                <Link href="https://www.linkedin.com/in/remyflores/" className="btn col-span-1 py-3 flex justify-center dark:text-slate-700">
                  <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                </Link>
                <Link href="https://www.instagram.com/youngglitterbearxvx/" className="btn col-span-1 py-3 flex justify-center dark:text-slate-700">
                  <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                </Link>
                <span className='col-span-1' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
