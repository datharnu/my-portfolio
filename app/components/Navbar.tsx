import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
<section className='p-10 lg:py-12 lg:px-20'>
<div className='flex flex-col md:flex-row lg:flex-row justify-between space-y-12 md:space-y-0 lg:space-y-0 items-center '>
      <div>
     <Link href="/" className='text-[#DADADA] text-[26px] tracking-[10px] font-outfit'>
       <span className='text-[#FFC918]'>e</span>mmanuel
       </Link>
      </div>

      {/* NAV MENU */}
<div className=''>
  <ul className='uppercase tracking-[3px] font-outfit lg:font-medium text-xs lg:text-[16px] lg:tracking-[8px] flex flex-col md:flex-row lg:flex-row justify-between gap-5'>
    <li className='hover:text-yellow'>
      <a href='#'>my projects</a>
    </li>
    <li className='hover:text-yellow'>
      <a href='#'>about me </a>
    </li>
    <li className='hover:text-yellow'>
      <a href='#'>hire me</a>
    </li>
  </ul>

</div>
    </div>
</section>
  )
}
