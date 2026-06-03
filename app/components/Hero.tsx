import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-[#181D22] min-h-screen pb-5 lg:pb-20'>
   
      {/* Fullstack Developer */}
      <div className='font-outfit text-center py-5 space-y-1 lg:space-y-2 lg:mt-2'>
        <h1 className='text-xs md:text-sm lg:text-xl text-yellow tracking-[5px] md:tracking-[10px] lg:tracking-[14px] lg:font-medium'>FULLSTACK</h1>
        <h2 className='text-4xl md:text-6xl lg:text-7xl text-purple font-medium tracking-[2px] lg:tracking-[5px]'>DEVELOPER</h2>
        <p className='text-[12px] md:text-sm lg:text-xl text-yellow tracking-[10px] md:tracking-[20px] lg:tracking-[24px]  lg:font-medium'>BASED IN NIGERIA </p>
      </div>

<section className="p-10 lg:pt-28 lg:px-20 flex flex-col lg:flex-row lg:justify-between">
  {/* Skills */}
  <div className="uppercase font-outfit font-medium  text-[10px] md:text-[12px] lg:text-[14.5px] space-y-3 tracking-[2px] lg:tracking-[5px]">
    <p>mobile developer</p>
    <p>web development</p>
    <p>frontend developer</p>
    <p>backend developer</p>
    <p>cms</p>
    <p>design thinking</p>
  </div>

  {/* Image */}
  <div className="flex-shrink-0 lg:-translate-y-10 flex justify-center">
    <Image
      src="/my-image.png"
      width={400}
      height={500}
      alt="my-image"
      className="w-[280px] md:w-[350px] lg:w-[350px] xl:w-[400px] h-auto object-cover"
      priority
    />
  </div>

  {/* What I Do */}
<div className='flex justify-center lg:justify-end lg:mt-28 xl:mt-36'>
<div className="font-outfit md:max-w-[39em] lg:max-w-sm xl:max-w-md  pt-10">
    <h1 className="uppercase text-yellow text-center text-lg lg:text-xl tracking-[5px] md:tracking-[8px] lg:tracking-[10px] mb-2">
      Product Engineer
    </h1>

    <p className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[28px] lg:leading-[30px]">
    I bridge the gap between product thinking and engineering.
From user-facing interfaces to the systems that power them,
I build reliable, scalable products that people enjoy using.
    </p>
  </div>
</div>
</section>

{/* About me  */}
<section className='flex justify-center'>
<div className='font-outfit  space-y-3 p-10 lg:p-0  lg:px-20 lg:max-w-4xl md:px-20  '>
  <p className='text-[14px] lg:text-[16px] xl:text-[20px] font-medium tracking-[4px]'>I&apos;m an Open Book</p>
<div className='uppercase lg:hidden text-5xl tracking-[5px] text-purple font-medium'>
<h1>about</h1>
<h1>me.</h1>
</div>

<div className='uppercase hidden lg:block text-7xl tracking-[5px] text-purple  font-medium'>
<h1>about me.</h1>
</div>

<p className='text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[28px] lg:leading-[30px]'>
I&apos;m a Fullstack Developer and Product Engineer passionate about building products that people love to use.
 From intuitive user interfaces to scalable backend systems, 
I create digital experiences that combine thoughtful design, strong engineering, and real business value.
As a founder and builder, I enjoy turning ideas into products, solving complex problems, 
and developing reliable solutions that make a meaningful impact. My work focuses on performance, 
usability, and creating technology that serves both users and business goals.

<p className="w-fit text-yellow text-[14px] pt-4 lg:text-[14px] xl:text-[16px] tracking-[1px] border-b-2 border-purple">
  More About Me {">"}{">"}
</p>
</p>
</div>
</section>
    </div>
  )
}
