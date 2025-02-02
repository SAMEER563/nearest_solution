"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "GapsapMitro",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image: "./assets/1.png", // Replace with your actual image path
  },
  {
    title: "Service Two",
    description:
      "Another example of dummy text to showcase the carousel effect with auto-sliding...",
    image: "./assets/2.png",
  },
  {
    title: "Service Three",
    description:
      "This service is the third in the lineup, giving more variety and depth to your offerings...",
    image: "./assets/3.png",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#B7EFF8B2] p-6">
      {/* "OUR SERVICES" moved to top left */}
      <h2 className="absolute top-10 left-10 border border-black px-6 py-2 rounded-full shadow-lg ">
        OUR SERVICES
      </h2>

   

      <div className="relative w-full max-w-lg">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#97e1ecb2] p-12 rounded-lg shadow-xl shadow-gray-500 flex flex-col items-center"
        >
          <div className="flex gap-4 items-center">
            <div className="w-32 h-32 rounded bg-gray-300 flex-shrink-0 overflow-hidden">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{services[currentIndex].title}</h3>
              <p className="text-sm text-gray-600">{services[currentIndex].description}</p>
            </div>
          </div>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow-md">
            Visit →
          </button>
        </motion.div>
      </div>

      <div className="flex mt-6 gap-2">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
