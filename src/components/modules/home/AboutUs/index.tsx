import React from 'react';
import { FaLaptopCode, FaServer, FaSitemap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Front-end Development',
    description: 'Built responsive UIs with React, Next.js, Tailwind CSS.',
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    count: '100+ PROJECTS',
    highlight: true,
  },
  {
    title: 'Back-end Development',
    description: 'Developed APIs with Node.js, Express, and MongoDB.',
    icon: <FaServer className="text-3xl text-purple-400" />,
    count: '40+ PROJECTS',
    highlight: false,
  },
  {
    title: 'Web Architecture',
    description: 'Engineered scalable full-stack applications.',
    icon: <FaSitemap className="text-3xl text-purple-400" />,
    count: '25+ PROJECTS',
    highlight: false,
  },
];

const AboutMeSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764] text-white px-6 md:px-20 py-16">
      {/* Left */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <p className="text-2xl font-semibold text-purple-400 mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why you <span className="text-pink-500">hire me</span> for <br />
            your <span className="text-purple-300 italic">next project?</span>
          </h2>
          <p className="text-slate-300 mb-6">
            I specialize in building modern, responsive web applications that perform exceptionally and look stunning.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded shadow-md transition">
            Hire Me
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-4">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-4 p-4 rounded-xl shadow-md ${
                proj.highlight
                  ? 'bg-gradient-to-r from-[#1E293B] to-[#312E81]'
                  : 'bg-[#1E293B]'
              }`}
            >
              <div className="p-3 bg-[#312E81] rounded-full">{proj.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-white">{proj.title}</h4>
                <p className="text-sm text-slate-400">{proj.description}</p>
              </div>
              <div className="ml-auto text-xs text-purple-400">{proj.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
