import Link from 'next/link'
import React from 'react'

export default function Myworks() {
  return (
    <div className='p-10 lg:px-20 bg-yellow font-outfit text-[#181D22]'>
   <div className=' space-y-4'>
   <p className='text-[14px] lg:text-[16px] xl:text-[18px] tracking-[4px]'>Take A Look</p>
<div className='uppercase text-5xl lg:text-6xl xl:text-6xl tracking-[5px] lg:tracking-[8px] lg:font-semibold font-medium'>
<h1>my</h1>
<h1>works.</h1>
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

    </div>
  )
}
