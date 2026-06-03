import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Myworks() {
  return (
<div className='bg-[#181D22] min-h-screen lg:pb-64'>
<div className='relative p-10 md:px-20 bg-yellow font-outfit text-[#181D22] min-h-screen md:min-h-[50%]'>
  {/* Text content */}
  <div className='space-y-4'>
    <p className='text-[14px] lg:text-[16px] xl:text-[18px] tracking-[4px]'>Take A Look</p>
    <div className='uppercase text-5xl lg:text-6xl xl:text-6xl tracking-[5px] lg:tracking-[8px] lg:font-semibold font-medium'>
<div className='md:hidden'>
<h1>my</h1>
<h1>works.</h1>
</div>
      <div className='hidden md:block'>
        <h1>my works.</h1>
      </div>
    </div>
  </div>

  <p className='text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[28px] pt-4 lg:leading-[30px] max-w-2xl'>
    With a passion for both product thinking and engineering,
    I create digital experiences that are functional,
    scalable, and user-focused. Every project is an opportunity to combine thoughtful design with robust technology
    to deliver meaningful results.
  </p>

  <Link href={''}>
    <p className='font-medium text-[16px] mt-4 border-b-2 w-fit border-black'>Explore {'>'}{'>'}</p>
  </Link>

  {/* Phone mockup — pinned to bottom */}
  <div className='absolute bottom-0 left-0 right-0  md:hidden'>
<Link href={""} >
<Image
      src="/phone-mockup3.png"
      alt="phone-mockup"
      width={400}
      height={200}
      className="w-full md:w-[350px] lg:w-[350px] xl:w-[400px] h-auto object-cover"
    />
</Link>
  </div>

  {/* large screen mockup */}
<div className=" absolute -bottom-72 right-10 hidden md:block">
<Link href={""}>
<Image
    src="/phone-mockup3.png"
    alt="phone-mockup"
    width={400}
    height={200}
    className="w-full md:w-[350px] lg:w-[350px] xl:w-[400px] h-auto object-cover rounded-2xl "
  />
</Link>
</div>
</div>
{/*  */}
<section className=' relative md:top-48 bg-[#181D22] py-10 max-w-6xl'>
  <div className='font-outfit p-10 lg:p-0 lg:px-20 lg:max-w-6xl md:px-20'>

    <div className='uppercase text-purple font-medium mb-12'>
      <h1 className='text-5xl lg:text-7xl tracking-[5px]'>
        startups i've built.
      </h1>
    </div>

    <div className='grid md:grid-cols-2 gap-8'>

      {/* Rentville */}
      <div className='border border-purple/20 rounded-2xl p-8 bg-[#1D2329] hover:border-purple transition-all duration-300'>
        <h2 className='text-2xl font-semibold text-purple mb-4'>
          Rentville
        </h2>

        <p className='text-sm md:text-base leading-7 text-gray-300'>
        A P2P housing marketplace connecting homeowners, tenants, flatmates, and roommates. 
        Features include property listings, real-time chat, dashboards, scheduling, authentication, and payment integration.
        </p>

        <button className='mt-6 border-b-2 border-purple text-yellow tracking-[2px] hover:text-white transition-colors'>
          View Rentville {'>'}{'>'}
        </button>
      </div>

      {/* Picha */}
      <div className='border border-purple/20 rounded-2xl p-8 bg-[#1D2329] hover:border-purple transition-all duration-300'>
        <h2 className='text-2xl font-semibold text-purple mb-4'>
          Picha
        </h2>

        <p className='text-sm md:text-base leading-7 text-gray-300'>
          An AI-powered event photo platform featuring QR guest uploads and AI
          face search. Guests upload instantly, then find every photo they
          appear in with a single selfie.
        </p>

        <button className='mt-6 border-b-2 border-purple tracking-[2px] text-yellow hover:text-white transition-colors'>
          View Picha {'>'}{'>'}
        </button>
      </div>

    </div>

  </div>
</section>

</div>
  )
}
