import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#181D22] px-10 '>
            <div className='flex justify-center items-center gap-8 pb-5'>
       <Link href="/" className='text-[#DADADA] text-[21px] tracking-[5px] font-outfit'>
      <span className='text-[#FFC918]'>e</span>mmanuel
      </Link>
      {/* icons */}
<Link href='https://www.linkedin.com/in/emmanuelolagbemi/' target='_blank' >
<Image src={'/linkedin.png'}
        className='w-8 h-8'
    alt="linkedin-icon" width={100} height={100}
    />
</Link>

<Link href="https://github.com/datharnu" target='_blank'>
<Image src={'/github.png'}
        className='w-7 h-7 rounded-sm'
    alt="linkedin-icon" width={100} height={100}
    />
</Link>
      
      </div>
      <p className='text-[11px] font-outfit text-white py-5 text-center'>Designed by Emmanuel Olagbemisoye. All rights reserved. ©2026 </p>
     </div>
  )
}
