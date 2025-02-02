import React from "react";

const ChooseUs = () => {
  return (
    <div className="bg-[#d2edf2b2] min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Title at Top Left (Responsive) */}
      <h2 className="absolute top-6 left-6 md:top-10 md:left-10 text-base md:text-base  px-6 py-2  border border-black rounded-full shadow-md">
        WHY CHOOSE US
      </h2>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-20 max-w-7xl">
        {/* Card 1 */}
        <div className="w-full sm:w-[389px] h-auto  flex flex-col items-center text-center p-6 rounded-xl">
          <img src="/assets/feature1.png" alt="Customer Centric" className="w-32 sm:w-40 h-32 sm:h-40" />
          <h3 className="font-bold text-lg sm:text-xl mt-4 sm:mt-6">Customer Centric Approach</h3>
          <p className="text-sm text-gray-600 mt-2 sm:mt-3">
            We prioritize your convenience, offering seamless navigation, fast loading pages, and a user-friendly experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[389px] h-auto  flex flex-col items-center text-center p-6 rounded-xl">
          <img src="/assets/feature2.png" alt="Comprehensive" className="w-32 sm:w-40 h-32 sm:h-40" />
          <h3 className="font-bold text-lg sm:text-xl mt-4 sm:mt-6">Comprehensive</h3>
          <p className="text-sm text-gray-600 mt-2 sm:mt-3">
            From travel to eCommerce, all bases are covered so you don&apos;t have to look anywhere else.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[389px] h-auto  flex flex-col items-center text-center p-6 rounded-xl">
          <img src="/assets/feature3.png" alt="Tailored for You" className="w-32 sm:w-40 h-32 sm:h-40" />
          <h3 className="font-bold text-lg sm:text-xl mt-4 sm:mt-6">Tailored For You</h3>
          <p className="text-sm text-gray-600 mt-2 sm:mt-3">
            Our solutions are designed to fit your unique needs, ensuring you get exactly what you are looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
