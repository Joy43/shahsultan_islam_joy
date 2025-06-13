'use client';

import { motion } from 'framer-motion';
import ParticlesAnimation from "@/components/animation/particles";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0f0f1c]">

      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesAnimation />
      </div>

      <div className="relative z-10 w-[92%] max-w-[1300px] mx-auto px-4 py-20 text-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, duration: 1 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
              >
                Hi there, I am
              </motion.h1>
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00FFFF] mt-2"
              >
                Shahsultan Islam Joy
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              Passionate Full Stack Web & App Developer with real-world experience in building responsive and user-friendly apps. 
              Currently studying B.Sc. in Computer Science & Engineering, and eager to use my skills to contribute to creative and meaningful projects.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:ssjoy43@gmail.com"
                className="relative px-6 py-2 font-semibold rounded overflow-hidden bg-red-500 transition hover:bg-opacity-90"
              >
                Send Mail
              </a>
              <a
                href="/joy.pdf"
                download
                aria-label="Download CV"
                className="inline-block"
              >
                <button className="relative px-6 py-2 font-semibold text-gray-900 bg-white rounded hover:bg-[#00FFFF] hover:text-gray-900 transition duration-300">
                  Download CV
                </button>
              </a>
            </motion.div>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex gap-6 flex-wrap mt-4"
            >
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">3+</h4>
                <p className="text-sm sm:text-base text-gray-300">Years Experience</p>
              </div>
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">180+</h4>
                <p className="text-sm sm:text-base text-gray-300">Projects Completed</p>
              </div>
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">98%</h4>
                <p className="text-sm sm:text-base text-gray-300">Faster Project Delivery</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="w-full md:w-1/2 relative flex items-center justify-center"
          >
            <div className="relative w-full">
              <Image
                className="object-cover w-full h-auto"
                src="/ssjoy.png"
                width={1000}
                height={900}
                alt="Shahsultan Islam Joy"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
