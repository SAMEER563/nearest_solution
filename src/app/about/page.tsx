import React from 'react'

const page = () => {
  return (
    <>
      <div className='bg-cyan-100 min-h-screen p-10 '>
         <div>
          <h1 className='text-4xl font-semibold pt-10'>ABOUT US | Nearest Solutions</h1>
          <p className='tracking-wider'>Discover Nearest Solutions, a leader in providing innovative digital solutions like AI PDF makers, QR code generators, vehicles <br />booking  app,  Real time chatting platform, portfolio maker, blog writing platform, social media thumbnail, website and app <br /> development services and video maker. Learn more about our mission, values, and services.</p>
         </div>
         <h3 className='bg-cyan-200 p-5 w-36 mt-4 rounded-lg'>Introduction</h3>
         <p className='tracking-wider gap-3 mt-1'>Welcome to Nearest Solutions, where innovation meets simplicity. Our platform provides cutting-edge digital <br />solutions to make everyday tasks simpler and more efficient. From generating personalized AI PDF makers, <br /> QR code generators, vehicles booking  app,  Real time chatting platform, portfolio maker, blog writing <br /> platform, social media thumbnail, website and app development service and video maker, we&apos;re dedicated to <br /> offering tools that save time and enhance productivity</p>
         <h1 className='text-3xl font-medium'><i>Explore our services and discover how we can <br /> support your digital journey </i></h1>
         <div className='flex flex-col sm:flex-row sm:justify-between mt-2'>
  <div className='mt-2'>
    <h3 className='bg-cyan-200 p-5 w-36 mt-6 rounded-lg'>Our Mission</h3>
    <p className='tracking-wider gap-3 mt-3'>
      Our mission at Nearest Solutions is to revolutionize the way people interact with technology. We offer a suite of services designed 
       to simplify processes, enhance productivity, and help businesses and individuals thrive in a digital-first world.
    </p>
  </div>
  <img src="/assets/about.png" alt="Comprehensive" className="w-full sm:w-[500px] mt-4 sm:mt-0" />
</div>

       <h3 className='bg-cyan-200 p-5 w-36 mt-6 rounded-lg'>Our Values</h3>
       <p className='tracking-wider gap-3 mt-3'>At Nearest Solutions, we are guided by a commitment to innovation, simplicity, and user satisfaction. Our values drive us to continually <br className='hidden md:block'/> improve our services and deliver exceptional digital tools that enhance your experience.</p>

       <div className='bg-blue-50 md:w-[1125px] h-[652px] mt-6 rounded-tl-[150px] rounded-br-[150px] md:ml-[230px]'>
            <div className='flex ml-24'>
              <div className='rounded-full bg-cyan-500 w-[130px] h-[130px] mt-5  '>
                <h1 className='m-6 mt-12 text-2xl'>Quality</h1>
              </div>
              <h1 className='mt-20 ml-24 text-lg tracking-wider hidden md:block'>Delivering reliable, high quality digital services.</h1>
            </div>
            <div className='flex ml-24'>
              <div className='rounded-full bg-cyan-500 w-[130px] h-[130px] mt-5  '>
              <h1 className='ml-4 mt-8 text-2xl'>Customer <span className='flex flex-col ml-4'>focus</span> </h1>

              </div>
              <h1 className='mt-20 ml-24 text-lg tracking-wider hidden md:block'>We put our users at the heart of everythig we do.</h1>
            </div>
            <div className='flex ml-24'>
              <div className='rounded-full bg-cyan-500 w-[130px] h-[130px] mt-5  '>
              <h1 className='ml-4 mt-12 text-2xl'>Simplicity</h1>
              </div>
              <h1 className='mt-20 ml-24 text-lg tracking-wider hidden md:block'>We focus on creating easy-to-use tools for everyone.</h1>
            </div>
            <div className='flex ml-24'>
              <div className='rounded-full bg-cyan-500 w-[130px] h-[130px] mt-5  '>
              <h1 className='ml-2 mt-12 text-2xl'>Innovation</h1>
              </div>
              <h1 className='mt-20 ml-24 text-lg tracking-wider hidden md:block'>Constantly envolving with the latest technology.</h1>
            </div>
       </div>
      </div>
    </>
  )
}

export default page