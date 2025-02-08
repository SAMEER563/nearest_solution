import React from 'react'
import Image from 'next/image' // Import Next.js Image component

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 min-h-screen bg-[#d2edf2b2]">
        <div className="flex flex-col space-y-10 md:space-y-20 md:w-1/2">
          <h2 className="border border-black px-6 py-2 w-36 ml-8 rounded-full shadow-lg">About Us</h2>

          <p className="tracking-wider text-lg">
            At Nearest Solutions, we&apos;re passionate about simplifying life and enhancing productivity <br className='hidden ' /> through cutting-edge technology. Our goal is to provide you with intuitive tools that <br className='hidden ' /> empower you to create, organize, and communicate effortlessly. Whether you&apos;re a <br className='hidden ' /> business professional, a traveler, or someone looking to streamline everyday tasks, we <br className='hidden ' /> have something for you.
          </p>

          <p className="tracking-wider text-lg">
            From generating personalized AI PDF makers, QR code generators, vehicles booking <br className='hidden md:block' /> app, Real-time chatting platform, portfolio maker, blog writing platform, social media thumbnail, website and app development service, and video maker, we&apos;re dedicated to offering tools that save time and enhance productivity.
          </p>
        </div>

        {/* Use the Next.js Image component */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:w-1/2">
          <Image 
            src="/assets/about_logo.png" 
            alt="About Logo" 
            width={350}  // Set the width you want for the image on small screens
            height={350} // Set the height you want for the image on small screens
            className="md:rotate-90 transition-transform duration-300 lg:w-[700px] lg:h-[200px]"  // Larger size on large screens (lg)
          />
        </div>
      </div>
    </>
  )
}

export default About;
