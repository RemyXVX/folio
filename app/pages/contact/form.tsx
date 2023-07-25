import React from 'react';

const Form = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL_REMY;

  return (
    <div className="container mx-auto">
      <div className="pb-2">
        <h1 className="text-4xl font-bold">Contact:</h1>
        <p className="text-xl font-light pb-2">shoot my line, or tell me a secret</p>
      </div>
      <form
        target="_blank"
        action={`${email}`}
        method="POST"
        className="max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
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
            rows={10}
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
