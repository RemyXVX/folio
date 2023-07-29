import React from 'react';

const Form = () => {
  const email = "https://formsubmit.co/1ec482839cb75df9cc55985f43f6d4e7"
  const redirectUrl = "https://remyxvx.github.io/folio/"

  return (
    <div className="container mx-auto">
      <div className="pb-2">
        <h1 className="text-4xl font-bold dark:text-slate-700">Contact:</h1>
        <p className="text-xl font-light pb-2 dark:text-slate-700">shoot my line, or tell me a secret</p>
      </div>
      <form
        target="_blank"
        action={`${email}`}
        method="POST"
        className="max-w-2xl mx-auto"
      >
        <input type="hidden" name="_url" value={redirectUrl} />
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:text-slate-700"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:text-slate-700"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:text-slate-700"
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
