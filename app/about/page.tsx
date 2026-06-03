import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className='font-outfit'>
        {/* Banner */}
 <div className='bg-yellow  gap-5 text-[#181D22] px-10 pt-7 pb-5 lg:py-10 md:px-20 '>
<div className='text-center space-y-2 lg:space-y-5'>
<p className='text-[10.5px] md:text-lg lg:text-[20px]  tracking-[2px] lg:tracking-[4px] font-medium'>I&apos;m Emmanuel Olagbemisoye</p>
<h1 className='text-[28px] uppercase md:text-[31.68px] lg:text-[40px] xl:text-6xl font-semibold tracking-[4px] xl:tracking-[10px] leading-[1.1] text-left lg:text-center lg:leading-0 '>A fullstack / product engineer </h1>
</div>
<div className='flex justify-end mt-4 mr-10 md:ml-64 md:mt-2 md:justify-center'>
<Image src={"/arrow.png"} alt='arrow' width={69} height={69} className='size-6 md:size-7 lg:size-14 ' />
</div>
</div>

{/* About section  */}
<section className='px-8 md:px-16  lg:flex items-center lg:pt-28 xl:px-24  '>
    {/* Image */}
    <div className='flex justify-center pb-10 pt-5 lg:w-[40%]'>
    <Image src='/my-image.png' alt="my-image" className='w-[65vw] md:max-w-[50vw] lg:max-w-[35vw] xl:max-w-[25vw]' width={718} height={959}/>
    </div>
    {/* About info */}
    <div className='lg:w-[60%]'>
        <h1 className='text-[31.68px] md:text-[42.24px] lg:text-[42.24px] lg:text-left uppercase font-medium text-center text-purple tracking-[3px] pb-5 '>About me.</h1>
  <div className='text-[14px] text-[16px] leading-[1.8] space-y-2 mb-20'>
  <p >
  Some people find their way into tech through textbooks and classrooms. I found mine through a friend.
  </p> 

<p>
Growing up, I studied music not computer science, not engineering. I genuinely believed coding was something reserved for science students, a world that wasn&apos;t meant for people like me. That changed the day I watched a friend, someone I&apos;d made music with, sit down and start building things on a screen. I was fascinated. He guided me through those first steps, and something clicked. I haven&apos;t stopped building since.
</p>

<p>
That curiosity sent me down a path I never expected. I taught myself the fundamentals, picked up the tools, and eventually turned that initial spark into a craft. Today I work as a full-stack engineer with a product mindset someone who doesn&apos;t just write code, but thinks deeply about why a product exists, who it&apos;s for, and how it should feel to use. From conceiving the idea to shipping the final product, I&apos;m comfortable owning the entire journey.
</p>

<p>
I&apos;ve built startups from scratch Rentville, a P2P housing marketplace, and Picha, an AI-powered event photo platform as well as production platforms for real businesses and communities. Each project has pushed me to grow not just technically, but as a problem-solver and decision-maker. Working through challenges like integrating AI face recognition across multiple providers, or pushing back on a design flow that wouldn&apos;t serve users well in production, has taught me that great products come from both technical rigour and genuine empathy for the people using them.
</p>

<p>
Where I come from shapes how I build. My background has given me a lens that&apos;s always asking: who might be left out of this? Who hasn&apos;t been thought about? That question drives my interest in building products that are inclusive, accessible, and grounded in real human needs not just clean interfaces.
</p>

<p>
I&apos;m ambitious, honestly. I want to build products that genuinely matter, grow my own ventures, and be known as an engineer who ships things that work and things that last.
</p>

<p>
Outside of the screen, you&apos;ll find me deep in music or mid-game both keep my mind sharp and my creativity alive in ways that almost always find their way back into the work.
</p>
  </div>
  
    </div>
</section>
    </div>
  )
}
