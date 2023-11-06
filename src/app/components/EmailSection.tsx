'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { POST } from '../api/send/route';
interface EmailSection {
  cols: number;
  rows: number;
}


export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    POST
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      title: { value: string };
      message: { value: string };
    };
    const data = {
      email: target.email.value,
      title: target.title.value,
      message: target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  return (
    <section className='my-20'>
      <h1 id='contact' className='text-center font-bold text-3xl mb-14'>
        3.0 Contact me
      </h1>
      <div className='grid md:grid-cols-2 py-12 gap-4 rounded-xl bg-purple-100 px-12'>
        <div className=''>
          <p className='my-4 font-semibold'>Hey there! 👋🏻</p>
          <p className=''>
            I&apos;m open for work or opportunities to learn more about
            front-end development.
          </p>
          <Image
            src={'/images/aboutImg.svg'}
            width={300}
            height={300}
            alt={'about me'}
          ></Image>
        </div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <label htmlFor='email' className='block'>
            Email
          </label>
          <input
            type='email'
            id='email'
            required
            placeholder='example@domain.com'
            className='p-2 rounded-lg'
          />
          <label htmlFor='title' className='block'>
            Title
          </label>
          <input
            type='text'
            id='title'
            required
            placeholder='ex. Saying hello'
            className='p-2 rounded-lg'
          />
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            className='rounded-lg p-2'
            cols={10}
            rows={4}
          ></textarea>
          <button
            type='submit'
            className='mt-3 bg-white rounded-md p-2 font-semibold text-sm hover:bg-black hover:text-white'
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className='text-green-400'>Email was sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}
