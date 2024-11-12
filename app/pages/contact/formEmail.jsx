import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEmail = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('EmailJS configuration is missing. Please check your environment variables.');
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        e.target, 
        EMAILJS_PUBLIC_KEY
      );
      toast.success('Email sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Email failed to send. Please try again later.');
    }
  };

  return (
    <div className="max-w-6xl lg:mx-auto px-4 py-2">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <header className="bg-sky-800 text-white py-8 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Contact Me</h1>
        </header>
        
        <form className="p-6 md:p-8 lg:p-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>
          </div>
  
          <div className="mt-6 space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your message"
              autoComplete="off"
              required
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="mt-6 w-full bg-sky-800 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormEmail;