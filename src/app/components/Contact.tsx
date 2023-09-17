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
      <a href='mailto:alicia-olofsson@hotmail.com' className='border-solid border-2 border-black p-3 rounded-lg font-semibold hover:bg-amber-100'>Send me a message</a>
    </div>
  );
};

export default ContactForm;
