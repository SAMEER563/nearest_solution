import BackToTopButton from '@/components/BackToTop'
import About from '@/pages/About'
import ChooseUs from '@/pages/ChooseUs'
import Contact from '@/pages/Contact'
import ServicesCarousel from '@/pages/Service'
import Image from 'next/image'

import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 bg-[#B7EFF8B2] rounded-tl-[100px] min-h-screen rounded-tr-[100px] mt-5'>
        <div className="flex flex-col space-y-14 text-center md:text-left">
          <p className='mt-10 ml-5 font-bold text-xl'>Your One-Step Platform for</p>
          <h1 className='space-y-10 font-bold text-3xl md:text-5xl'>ALL YOUR NEEDS</h1>
          <p className='text-base'>Explore our tailored services and find solutions</p>
          <p className='text-base'>
            Unlock the power of AI, digital tools, and seamless solutions. Start simplifying your digital world today.
          </p>
          <button className='border border-black p-3 w-36 rounded-full'>
            EXPLORE NOW
          </button>
        </div>

        {/* This div is responsible for the responsive layout of the image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <Image 
            src="/assets/cube.png" 
            alt="logo" 
            width={600} 
            height={600} 
            className="w-full md:w-[500px] md:h-[400px] sm:flex-col md:flex-row" 
          />
        </div>
      </div>
      <About />
      <ServicesCarousel />
      <ChooseUs />
      <Contact />
      <BackToTopButton />
    </>
  )
}


export default page
