'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:olagbemisoyee@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.open(mailtoLink, '_blank')
  }

  return (
    <div className='font-outfit'>
      <div className='bg-yellow gap-5 text-[#181D22] px-10 pt-7 pb-5 lg:py-10 md:px-20'>
        <div className='text-center space-y-2 lg:space-y-5'>
          <p className='text-[10.5px] md:text-lg lg:text-[20px] tracking-[2px] lg:tracking-[4px] font-medium'>Love to hear from you</p>
          <h1 className='text-[28px] uppercase md:text-[31.68px] lg:text-[40px] xl:text-6xl font-semibold tracking-[4px] xl:tracking-[10px] leading-[1.1] text-center lg:leading-0'>Hire me</h1>
        </div>
        <div className='flex justify-end mt-4 mr-10 md:ml-64 md:mt-2 md:justify-center'>
          <Image src={"/arrow.png"} alt='arrow' width={69} height={69} className='size-6 md:size-7 lg:size-14' />
        </div>
      </div>

      <div className='lg:flex justify-center'>
        <div className='py-10 px-5 max-w-7xl'>
          <h1 className='uppercase lg:text-center text-purple text-[22px] md:text-[42px] lg:text-[44px] xl:text-[50px] md:pt-10 font-medium tracking-[2px] leading-[1.1]'>Let's create something extraordinary together.</h1>
          <p className='py-5 lg:text-center text-sm md:text-[16px] lg:text-[20px] lg:px-36 leading-[1.8]'>Ready to turn your vision into reality? Let's collaborate and bring your ideas to life! Whether you're seeking captivating web design, striking graphics, or innovative digital solutions, I'm here to help. Drop me a message and let's start the conversation. I can't wait to hear from you.</p>
        </div>
      </div>

      <div className='px-5 pb-20 md:px-20 lg:px-0 lg:flex lg:justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full max-w-2xl'>

          <div className='flex flex-col gap-2'>
            <label className='text-[14px] font-medium'>Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              required
              className='bg-[#2a2a2a] text-white text-[14px] placeholder-white/30 border border-yellow rounded-sm px-4 py-3 outline-none focus:border-yellow transition-colors duration-200'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[14px] font-medium'>Email:</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
              className='bg-[#2a2a2a] text-white text-[14px] placeholder-white/30 border border-yellow rounded-sm px-4 py-3 outline-none focus:border-yellow transition-colors duration-200'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[14px] font-medium'>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message'
              required
              rows={10}
              className='bg-[#2a2a2a]  text-white text-[14px] placeholder-white/30 border border-yellow rounded-sm px-4 py-3 outline-none focus:border-yellow-400 transition-colors duration-200 resize-none'
            />
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-yellow hover:bg-yellow text-black font-medium text-[14px] px-10 py-3 rounded-sm transition-colors duration-200 cursor-pointer'
            >
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}