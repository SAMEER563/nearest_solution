import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-blue-50 px-16 py-16 ">
      {/* Header Section */}
      <div className="text-center space-y-4 ">
        <h3 className="font-semibold text-sm md:text-base">UPSKILL FOR BETTER FUTURE</h3>
        <h1 className="font-semibold text-2xl md:text-3xl">Request More Information</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-16 gap-10 ">
        {/* Left - Contact Details */}
        <div className="flex flex-col space-y-6">
          <h1 className="font-semibold text-2xl md:text-3xl">Contact Us</h1>
          <p className="text-md md:text-lg">
            We&apos;d love to hear from you! Reach out to us <br className="hidden md:block" /> through any of the following ways.
          </p>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <MdPhoneInTalk size={32} />
            <div>
              <h1 className="font-semibold text-lg">Phone</h1>
              <p className="text-md font-semibold">+91- 9839908578</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <MdEmail size={32}  />
            <div>
              <h1 className="font-semibold text-lg">Email</h1>
              <p className="text-md font-semibold">info@nearestsolution.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaLocationDot size={32}  />
            <div>
              <h1 className="font-semibold text-lg">Address</h1>
              <p className="text-md font-semibold">Sitapur Road, Lucknow</p>
              <p className="text-md font-semibold">PinCode - 226201</p>
            </div>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center">
          <img
            src="./assets/mcontact.png"
            alt="Contact Illustration"
            className="max-w-full w-80 md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
