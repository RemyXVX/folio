'use client';
import React from "react";
import FormEmail from './formEmail';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="w-full max-w-screen-xl bg-gray-100 dark:bg-slate-800 py-2 px-4 rounded-lg">
        <div className="grid md:grid-cols-1 gap-10 items-center">
          <FormEmail />
        </div>
      </div>
    </div>
  );
};

export default Contact;
