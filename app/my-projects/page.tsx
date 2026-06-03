import Image from 'next/image'
import React from 'react'
import CardComponent from './components/card'
import { projectData } from '../utils/data'

export default function ProjectPage() {
    

  return (
    <div className='font-outfit'>
        {/* explore banner */}
<div className='bg-yellow  gap-5 text-[#181D22] px-10 pt-7 pb-7'>

<div className='text-center space-y-1'>
<p className='text-[10.5px] md:text-lg lg:text-[20px] lg:font-normal tracking-[2px] lg:tracking-[4px] font-medium'>Explore My Portfolio</p>
<h1 className='text-[28px] md:text-[31.68px]] lg:text-[40px] xl:text-6xl font-semibold tracking-[4px] xl:tracking-[10px]'>PROJECTS .</h1>
</div>
<div className='flex justify-end mt-4 mr-10 md:ml-64 md:mt-2 md:justify-center'>
<Image src={"/arrow.png"} alt='arrow' width={69} height={69} className='size-6 md:size-7 lg:size-14 ' />
</div>
</div>

<div>

        <section className=' px-7 py-10 md:px-20 '>
<div className='lg:text-center'>
<h1 className='uppercase text-purple text-[22px] md:text-[42px] lg:text-[44px] md:pt-10 font-medium tracking-[2px] leading-[1.1]'>Get a glimpse into my world.</h1>
<p className='py-5 text-sm md:text-[16px] lg:px-36 leading-[1.8]'>With a hunger for building and a bias for shipping, I craft solutions that go beyond the screen engineering platforms where every feature solves a real problem, every line of code serves a purpose, and every product tells the story of an idea brought to life.</p>
</div>
{/* Startup and fullstack */}
{projectData.map((data, index) => {
    return (
<div key={index} className='lg:flex gap-5 lg:pt-20'>
<div className='lg:max-w-[40%] '>
    <p className='text-[15px] md:text-[16px]  text-yellow tracking-[3px] pt-5'>Sass & Enterprise Projects</p>
    <p className='uppercase text-purple text-[32px] md:text-[42px]  font-medium tracking-[4px] md:tracking-[6px] leading-[1.1]'>
  {data.title}
   </p>

    <p className='text-sm md:text[16px] leading-[1.8] py-5 lg:text-[16px]'>
  {data.description}
    </p>
   </div>


   
   {/* Cards */}
   <div className="p-5 space-y-5 lg:flex justify-center gap-10 items-center lg:max-w-[60%]">

{data.cards.map((card, index) => (
  <CardComponent
    key={index}
    image={card.image}
    cardName={card.cardName}
    link={card.link}
    className="w-[340px] lg:w-[280px]"
  />
))}

</div>
</div>

)
})}

</section>

</div>
    </div>
  )
}
