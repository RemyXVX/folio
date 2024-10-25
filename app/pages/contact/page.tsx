'use client';
import React from "react";
import Form from './form';
import SocialMediaLinks from './../../components/socialMediaLinks';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="w-full max-w-screen-xl bg-gray-100 dark:bg-slate-800 py-2 px-4 rounded-lg">
        <div className="grid md:grid-cols-1 gap-10 items-center">
          <Form />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-4">
        <h2 className="text-2xl font-bold mb-6 dark:text-slate-200">Connect with me</h2>
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Contact;
