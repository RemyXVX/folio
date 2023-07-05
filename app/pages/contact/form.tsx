import React from 'react';

const Form = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">FormSubmit Demo</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/test.email.remyflores@gmail.com"
        method="POST"
        className="max-w-sm mx-auto"
      >
        <div className="mb-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            name="message"
            rows={10} // Update the rows prop to a numeric value
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
