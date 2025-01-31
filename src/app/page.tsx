import About from '@/pages/About'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex justify-between items-center p-4 bg-[#B7EFF8B2] rounded-tl-3xl min-h-screen rounded-tr-3xl mt-3'>
    <div className="flex flex-col space-y-14 ">
     <p className='font-medium text-lg'>Your One - Step Plateform for</p>
         <h1 className='space-y-10 font-bold text-6xl'>ALL YOUR NEEDS</h1>
         <p className='font-medium text-lg'>Explore our tailored services and find solutions</p>
   
         <p className='font-medium text-lg'>Unlock the power of AI, digital tools, and seamless solutions. Start simplifying your digital world today</p>
   
         <button className='border border-black p-4  w-44 rounded-full '>EXLPORE NOW</button>
    </div>
    <div>
             <img src="./assets/cube.png" alt="" width="500px" className='hidden md:block' />
     
    </div>
    </div>
    <About />
    </>
  )
}

export default page