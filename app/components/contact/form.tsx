'use Server-side'
import React from 'react';

const onSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  alert('Form submitted');
}

const Form = () => {
  return (
    <>
      <form>
        <label 
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Message:
        </label>
        <textarea 
          id='message'
          name='message'
          rows={3}
          className="w-full px-3 py-2 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Your Message"
          required
        />
        <button 
          type='submit'
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;