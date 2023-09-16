'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id='contact' className='flex items-center flex-col p-12'>
      <h1 className='text-2xl font-bold mb-4'>Contact me</h1>
      <p className='mb-4'></p>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        {['name', 'email', 'message'].map((field) => (
          <div key={field} className='mb-4 flex flex-col'>
            <label
              htmlFor={field}
              className='text-md font-semibold text-gray-700'
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                rows={4}
                className='mt-1 px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none'
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                className='mt-1 px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none'
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <div className='text-center font-semibold my-4'>
          <button
            type='submit'
            className='w-72 border-solid border-black border-2 px-4 py-2 rounded-md hover:bg-amber-100 focus:ring focus:ring-indigo-300'
          >
            Send message 
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
