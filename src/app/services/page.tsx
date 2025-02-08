import React from 'react';

const page = () => {
  return (
    <>
      <div className="bg-black min-h-[510vh] md:min-h-[200vh] lg:min-h-[260vh] m-4 sm:m-6 lg:m-10 rounded-2xl inset-shadow-sm inset-shadow-indigo-500 text-white">
        <div className="ml-4">
          <h1 className="text-3xl sm:text-4xl font-semibold pt-10">Our Services | Nearest Solutions</h1>
          <p className="tracking-wider mt-6 text-base sm:text-lg">
            Explore the range of digital solutions from Nearest Solutions including AI <br />
            PDF makers, QR code generators, travel apps, and a messaging platform. <br />
            Find out how our services can simplify your digital tasks.
          </p>
        </div>

        <h1 className="mt-14 tracking-wider text-2xl sm:text-3xl ml-4">Transform Your Digital Experience with Our Innovative Tools</h1>
        <div className="ml-4">
          <h1 className="text-3xl sm:text-4xl font-semibold pt-10">Services Overview</h1>
          <p className="tracking-wider mt-6 text-base sm:text-lg">
            At Nearest Solutions, we offer a variety of powerful digital tools designed to streamline tasks, improve efficiency, and elevate <br />
            your productivity. Our services include customizable QR code generators, AI PDF creation, a user-friendly travel app, and a seamless <br />
            messaging platform. Each service is built with simplicity and innovation in mind, ensuring you get the best digital experience.
          </p>
        </div>

        {/* Background image wrapper */}
        <div className="relative">
          <div
            className="w-[90%] sm:w-[700px] mt-24 h-[950px] md:ml-[5%] sm:ml-[10%] bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/services_back.png")' }}
          >
            {/* Cards container */}
            <div className="absolute top-0 left-0 lg:left-24 right-0 bottom-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {/* Card 1 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 1</h2>
                <p>Details about the service provided in card 1.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 2</h2>
                <p>Details about the service provided in card 2.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 3</h2>
                <p>Details about the service provided in card 3.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 4</h2>
                <p>Details about the service provided in card 4.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 5</h2>
                <p>Details about the service provided in card 5.</p>
              </div>

              {/* Card 6 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 6</h2>
                <p>Details about the service provided in card 6.</p>
              </div>

              {/* Card 7 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 7</h2>
                <p>Details about the service provided in card 7.</p>
              </div>

              {/* Card 8 */}
              <div className="bg-white text-black rounded-lg p-4 shadow-lg w-[90%] sm:w-[300px] h-[350px]">
                <div className="w-[85px] h-[85px] bg-gray-500"></div>
                <h2 className="font-semibold text-xl">Card 8</h2>
                <p>Details about the service provided in card 8.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
