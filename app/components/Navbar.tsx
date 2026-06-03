"use client"
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
<section className='pt-10 pb-5 md:px-10 md:pb-2 lg:py-12 lg:px-20 lg:pb-2'>
<div className='flex flex-col md:flex-row lg:flex-row justify-between space-y-12 md:space-y-0 lg:space-y-0 items-center '>
      <div>
     <Link href="/" className='text-[#DADADA] text-[25px] tracking-[10px] font-outfit'
      onClick={(e) => {
        e.preventDefault()
        if (window.location.pathname === '/') {
          window.location.reload()
        } else {
          window.location.href = '/'
        }
      }}
     >
       <p className='tracking-in-expand'><span className='text-[#FFC918]'>e</span>mmanuel</p>
       </Link>
      </div>

      {/* NAV MENU */}
<div className=''>
  <ul className='uppercase tracking-[4px] font-outfit  font-medium text-[12px] lg:text-[16px] lg:tracking-[8px] flex flex-col md:flex-row lg:flex-row justify-between gap-6'>
    <li className='hover:text-yellow'>
      <a href='/my-projects'>my projects</a>
    </li>
    <li className='hover:text-yellow'>
      <a href='/about'>about me </a>
    </li>
    <li className='hover:text-yellow'>
      <a href='hire'>hire me</a>
    </li>
  </ul>

</div>
    </div>
</section>
  )
}
