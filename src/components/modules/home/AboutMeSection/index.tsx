'use client'
import { FaLaptopCode, FaServer, FaSitemap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Front-end Development',
    description: 'Developed responsive UIs with React, Next.js, Tailwind CSS, and ShadCN UI, ensuring accessibility, performance, and cross-device compatibility',
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    count: '100+ PROJECTS',
    highlight: true,
  },
  {
    title: 'App Development',
    description: 'Designed and developed responsive user interfaces using React Native, Express, and Node.js, ensuring high performance, accessibility, and seamless compatibility across Android and iOS devices.',
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    count: '2+ PROJECTS',
    highlight: true,
  },
  {
    title: 'Back-end Development',
    description: 'Built scalable APIs using Node.js, Express, TypeScript, and Prisma with both SQL and NoSQL (MongoDB) databases.',
    icon: <FaServer className="text-3xl text-purple-400" />,
    count: '40+ PROJECTS',
    highlight: false,
  },
  {
    title: 'Web Architecture',
    description: 'Engineered scalable full-stack applications and RESTful APIs using Node.js, Express, TypeScript, Prisma, and MongoDB/SQL, ensuring performance, maintainability, and cross-platform support.',
    icon: <FaSitemap className="text-3xl text-purple-400" />,
    count: '25+ PROJECTS',
    highlight: false,
  },
  {
    title: 'Database Management',
    description: 'Mongoose,MongoDB,Mysql,GraphSql Prisma, and MongoDB/SQL, ',
    icon: <FaSitemap className="text-3xl text-purple-400" />,
    count: '25+ PROJECTS',
    highlight: false,
  },
];

const AboutMeSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764] text-white px-6 md:px-20 py-16">
      {/*--------------------- Left ----------------------*/}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <p className="text-2xl font-semibold text-purple-400 mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why you <span className="text-pink-500">hire me</span> for <br />
            your <span className="text-purple-300 italic">next project?</span>
          </h2>
        <p className="text-slate-300 mb-6">
  I’m a passionate full Stack and MERN Web Developer committed to building immersive, high-impact digital experiences. With strong expertise in React, Next.js, React Native, Tailwind CSS, Firebase, Prisma, and PostgreSQL, I specialize in developing dynamic, responsive, and user-friendly applications that make a lasting impression.
  <br /><br />
  🔥 <strong>Backend & Full Stack Expertise:</strong><br />
  I’m proficient in Node.js, Express.js, Mongoose, GraphQL, and MongoDB, enabling me to deliver seamless server-side operations, robust API integrations, and scalable full stack solutions.
  <br /><br />
  🏆 <strong>Certifications & Achievements:</strong><br />
  - Certified E-skills Frontend Developer<br />
  - Graduate of Programming Hero with hands-on experience in real-world projects and industry-ready skills.
  <br /><br />
  🚀 <strong>What Drives Me:</strong><br />
  I’m always eager to collaborate on meaningful projects, explore the latest technologies, and deliver high-quality results that exceed expectations.
  <br /><br />
  Let’s connect and create something extraordinary!<br />
  📧 <strong>Email:</strong> ssjoy43@gmail.com
</p>
{/* 
          <button className="bg-red-500 hover:bg-pink-600 text-white px-5 py-2 rounded shadow-md transition">
          Contact Us
          </button> */}
        </div>

        {/*---------------- Right --------------------------*/}
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
