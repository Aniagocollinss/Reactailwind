import React, { useEffect, useState } from 'react';
import purplestroke from '../assets/purplestroke.jpg';
import boxx from '../assets/boxx.png';
import '../index.css'; // Ensure this CSS file is imported

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className={`w-full min-h-screen fade-in bg-gray-100 pt-15 px-6 flex flex-col justify-start relative transition-opacity duration-1000 ease-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Heading */}
        <div className="mt-5 mb-2 sm:mt-3">
          <h1 className="font-bold text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
            START YOUR
          </h1>
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] -mt-2 ">
            ADVENTURE
          </h1>
        </div>

        {/* Purple Section */}
        <div className="relative bg-purple-300 -mx-6 sm:mx-0 overflow-hidden rounded-2xl mt-4 h-[40vh] sm:h-auto">
          <img
            src={purplestroke}
            alt="purple stroke"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Foreground content */}
          <div className="relative z-10 px-6 pt-4 pb-4 flex flex-col justify-between h-full">
            {/* Top content */}
            <div>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px]">
                Discover the largest selection of unique tours! <br />
                Enjoy our fast and easy tour selection<br />
                process for any request, with 24/7 support <br />
                always ready to assist you.
              </p>
              <button className="font-bold text-white bg-black px-4 py-2 rounded-full border-2 border-black hover:bg-gray-100 hover:text-black transition mt-4">
                Get Started
              </button>
            </div>

            {/* Bottom content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-15 pt-4">
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px]">
                Our mobile app <br /> is available now
              </p>
              <div className="flex space-x-2 sm:pb-10">
                {/* Apple App Store Icon */}
                <a
                  href="#"
                  className="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center bg-white transition-transform duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    fill="black"
                  >
                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                  </svg>
                </a>

                {/* Google Play Store Icon */}
                <a
                  href="#"
                  className="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center bg-white transition-transform duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    fill="black"
                  >
                    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Boxx Image */}
        <div className="relative">
          {/* Desktop & Tablet */}
          <img
            src={boxx}
            alt="a box"
            className="w-48 sm:w-60 md:w-130 lg:w-140 z-20 hidden sm:block absolute right-10 bottom-10 sm:bottom-2 animate-custom-bounce"
          />

          {/* Mobile */}
          <img
            src={boxx}
            alt="a box"
            className="block sm:hidden mx-auto -mt-56 w-88 animate-custom-bounce"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
