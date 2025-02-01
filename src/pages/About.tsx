import React from 'react'

const About = () => {
  return (
   <>
    <div className="flex justify-between items-center p-4 min-h-screen bg-[#d2edf2b2]">
      <div className="flex flex-col space-y-20">
        <button className="border border-black p-3  w-36 rounded-full">About Us</button>
        
        <p className="tracking-wider text-lg ">
          At Nearest Solutions, we&apos;re passionate about simplifying life and enhancing productivity <br className='hidden md:block' /> through cutting-edge technology. Our goal is to provide you with intuitive tools that <br className='hidden md:block' /> empower you to  create, organize, and communicate effortlessly. Whether you&apos;re a <br className='hidden md:block' /> business professional, a traveler, or someone  looking to streamline everyday tasks, we <br className='hidden md:block' /> have something for you.
        </p>

        <p className="tracking-wider text-lg ">
          From generating personalized AI PDF makers, QR code generators, vehicles booking <br className='hidden md:block' /> app, Real-time chatting platform, portfolio maker, blog writing platform, social media thumbnail, website and app development service, and video maker, we&apos;re dedicated to offering tools that save time and enhance productivity.
        </p>
      </div>

      <div>
        <img src="./assets/about_logo.png" alt="About Logo" className="rotate-90 hidden md:block" />
      </div>
    </div>
   </>
  )
}

export default About;
