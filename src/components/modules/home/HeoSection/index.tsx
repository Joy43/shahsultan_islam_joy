import { MdDeveloperMode } from "react-icons/md";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-[92%] max-w-[1300px] mx-auto px-4 py-10 text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Hi there, I am</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00FFFF] mt-2">
              Shahsultan Islam Joy
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Experienced full-stack developer with 2+ years of expertise in Laravel, NestJS, and Nuxt.js.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ssjoy43@gmail.com"
              className="relative px-6 py-2 font-semibold text-black rounded overflow-hidden bg-[#00FFFF] transition hover:bg-opacity-90"
            >
              Hire Me
            </a>
            <button className="relative px-6 py-2 font-semibold text-gray-900 bg-white rounded hover:bg-[#00FFFF] hover:text-gray-900 transition duration-300">
              Latest Projects
            </button>
          </div>

          {/* Experience Stats */}
          <div className="flex gap-6 flex-wrap mt-4">
            <div className="flex flex-col items-start">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">2+</h4>
              <p className="text-sm sm:text-base text-gray-300">Years Experience</p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">77+</h4>
              <p className="text-sm sm:text-base text-gray-300">Projects Completed</p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">98%</h4>
              <p className="text-sm sm:text-base text-gray-300">Faster Project Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="relative w-full ">
            <Image
              className="object-cover w-full h-auto"
              src="/banner.gif"
              width={1000}
              height={800}
              alt="Shahsultan Islam Joy"
              priority
            />

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
