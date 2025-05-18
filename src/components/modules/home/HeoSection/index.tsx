
import { FaMobileAlt } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
const HeroSection = () => {
  return (
    <main>
         <div className="w-[90%] md:w-[88%] mx-auto flex gap-6 items-center text-white dark:text-black justify-between pb-20 mt-12 md:mt-24">
      {/* Left */}
      <div className="w-full flex flex-col gap-6 py-10 md:py-0">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">Hi there, I am</h1>
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold text-green-600">Samuel Abera!</h1>

        <p className="sm:text-lg text-md">
          Experienced full-stack developer with 5+ years of expertise in Laravel, NestJS and Nuxt.js experience.
        </p>

        <div className="flex gap-2">
          <a
            href="mailto:samuelabera87@gmail.com"
            className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 font-bold text-gray-800">Hire Me</span>
          </a>

          <button className="relative text-gray-200 dark:text-black px-6 py-2 rounded-md overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 font-bold group-hover:text-gray-800">Latest Projects</span>
          </button>
        </div>

        <div className="flex items-center sm:gap-10 gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">
              5 <sup className="font-bold -ml-1">+</sup>
            </h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Years Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">77+</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Projects Completed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">98%</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">Faster Project Delivery</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="xl:w-1/2 w-full flex items-center justify-center hidden lg:block">
        <div className="relative bg-black border border-none dark:border-gray-300 rounded-lg p-2 dark:bg-white">
          <img
            className="h-[80%] object-center object-cover"
            src="https://techakim.com/sam/tg/7268/li/imgs/2.png"
            alt="Portfolio Image"
          />

          {/* Floating Icon 1 */}
          <div className="absolute bg-green-600 text-gray-800 shadow-md shadow-green-600 animate-bounce px-2 py-1 rounded top-10 -left-10 border border-gray-400 z-10">
            <div className="flex gap-1 items-center">
              <FaMobileAlt className="w-8 h-8" />
              <h3 className="font-bold">Full-Stack Web Dev't</h3>
            </div>
          </div>

          {/* Floating Icon 2 */}
          <div className="absolute bg-green-600 text-gray-800 shadow-md shadow-green-600 animate-bounce px-2 py-1 rounded top-1/2 -right-14 border border-gray-400 z-10">
            <div className="flex gap-1 items-center">
              <GiArtificialIntelligence className="w-8 h-8" />
              <h3 className="font-bold">AI & Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

export default HeroSection;