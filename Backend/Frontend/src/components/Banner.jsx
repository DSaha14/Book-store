// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Container */}
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24">
        
        {/* Left Section (Text + Input) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Discover & Learn Something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              New Every Day!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Elevate your knowledge with our vast collection of books, articles, and resources. Stay curious and keep exploring!
          </p>

          {/* Email Input Field */}
          <div className="flex items-center gap-2 p-3 border rounded-xl bg-white bg-opacity-20 backdrop-blur-md shadow-lg w-full md:w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 text-gray-300"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center z-10"
        >
          <img src={banner} className="w-[450px] md:w-[550px] object-cover rounded-lg shadow-2xl" alt="Books Banner" />
        </motion.div>

      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[80px] w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L60,192C120,192,240,192,360,186.7C480,181,600,171,720,160C840,149,960,139,1080,144C1200,149,1320,171,1380,181.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </div>

    </div>
  );
}

export default Banner;
