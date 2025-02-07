import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdPhoneInTalk } from 'react-icons/md'
import { FaPaperPlane } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="pt-10 text-3xl font-semibold">Contact Us | Nearest Solutions</h1>
      
      {/* Contact Section */}
      <div className="w-[90%] md:w-[75%] bg-black text-white mt-12 rounded-2xl p-8">
        
        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 w-[90px] h-[90px] flex items-center justify-center rounded-full">
              <MdPhoneInTalk size={40} className="text-white"/>
            </div>
            <p className="text-lg font-semibold mt-3">+91- 9839908578</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 w-[90px] h-[90px] flex items-center justify-center rounded-full">
              <MdEmail size={40} className="text-white"/>
            </div>
            <p className="text-lg font-semibold mt-3">info@nearestsolution.com</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 w-[90px] h-[90px] flex items-center justify-center rounded-full">
              <FaLocationDot size={40} className="text-white"/>
            </div>
            <p className="text-lg font-semibold mt-3">Sitapur Road, Lucknow</p>
          </div>

        </div>

        {/* Form & Map Section */}
        <h1 className="text-3xl font-semibold text-blue-500 text-center mt-10">Get In Touch With Us</h1>
        
        <div className="flex flex-col md:flex-row mt-8 gap-6">
          
          {/* Contact Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-gray-200 text-black"/>
              <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-gray-200 text-black"/>
              <input type="text" placeholder="Subject" className="w-full p-3 rounded-md bg-gray-200 text-black"/>
              <textarea placeholder="Message" className="w-full p-3 rounded-md bg-gray-200 text-black h-24"></textarea>
              
              <button className="flex items-center justify-center bg-white text-black text-lg font-semibold py-3 px-6 rounded-md mt-4">
                Send <FaPaperPlane className="ml-2 text-blue-500"/>
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="flex-1">
            <div className="w-full h-[250px] rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1777.3714402874728!2d80.9179784712193!3d27.00668216832374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738859590586!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage
