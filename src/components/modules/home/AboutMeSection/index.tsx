'use client'

import { FaLaptopCode, FaServer, FaSitemap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

const projects = [
  {
    title: 'Front-end Development',
    description:
      'Responsive UIs with React, Next.js, Tailwind CSS, and ShadCN UI. Accessible, performant & cross-device compatible.',
    icon: <FaLaptopCode className="text-3xl text-pink-400" />,
    count: '100+ PROJECTS',
    highlight: true,
  },
  {
    title: 'App Development',
    description:
      'Cross-platform mobile apps using React Native, Express, and Node.js for iOS & Android.',
    icon: <FaLaptopCode className="text-3xl text-pink-400" />,
    count: '2+ PROJECTS',
    highlight: true,
  },
  {
    title: 'Back-end Development',
    description:
      'Scalable APIs with Node.js, Express, TypeScript, and Prisma for SQL/NoSQL databases.',
    icon: <FaServer className="text-3xl text-pink-400" />,
    count: '40+ PROJECTS',
    highlight: false,
  },
  {
    title: 'Web Architecture',
    description:
      'Full-stack systems with clean architecture using Next.js, TypeScript, Prisma & MongoDB.',
    icon: <FaSitemap className="text-3xl text-pink-400" />,
    count: '25+ PROJECTS',
    highlight: false,
  },
  {
    title: 'Database Management',
    description:
      'Secure and optimized data with MongoDB, MySQL, GraphQL, Prisma.',
    icon: <FaSitemap className="text-3xl text-pink-400" />,
    count: '25+ PROJECTS',
    highlight: false,
  },
]

const AboutMeSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764] text-white px-6 md:px-20 py-20 overflow-hidden scroll-mt-20">
      {/* Blur background */}
      <div className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-[#FF00FF]/20 blur-3xl rounded-full transform -translate-x-1/2 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-16 justify-between">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.p className="text-2xl font-semibold text-pink-400" variants={fadeInUp}>
            About Me
          </motion.p>

          <motion.h2 className="text-4xl font-bold leading-snug" variants={fadeInUp}>
            Why you <span className="text-pink-400">should hire me</span> <br />
            for your <span className="italic text-purple-400">next project?</span>
          </motion.h2>

          <motion.div className="text-slate-300 text-base space-y-6 leading-relaxed" variants={fadeInUp}>
            <p>
              I’m a passionate Full Stack Developer with experience building immersive web and mobile experiences.
            </p>

            <div>
              <strong className="text-purple-400">🔥 Technical Expertise:</strong><br />
              Proficient in <strong>React.js, Next.js, React Native</strong> for frontend and <strong>Node.js, Express.js, Prisma, GraphQL</strong> for backend.
            </div>

            <div>
              <strong className="text-purple-400">🧠 Problem Solver at Heart:</strong><br />
              I transform complex problems into intuitive, performant solutions with maintainable code.
            </div>

            <div>
              <strong className="text-purple-400">💼 Experience:</strong><br />
              - 100+ Front-end Projects<br />
              - 40+ Backend APIs<br />
              - 25+ Full-stack Apps (Web & Mobile)
            </div>

            <div>
              <strong className="text-purple-400">📧 Email:</strong>{' '}
              <a href="mailto:ssjoy43@gmail.com" className="underline text-blue-400 hover:text-blue-300">ssjoy43@gmail.com</a><br />
              <strong className="text-purple-400">🔗 LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/your-link" target="_blank" className="underline text-blue-400 hover:text-blue-300">linkedin.com/in/your-link</a><br />
              <strong className="text-purple-400">💻 GitHub:</strong>{' '}
              <a href="https://github.com/your-github" target="_blank" className="underline text-blue-400 hover:text-blue-300">github.com/your-github</a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Cards */}
        <div className="flex-1 flex flex-col gap-5 w-full">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: proj.highlight ? 0.5 : 0 }}
              className={`flex items-start gap-4 p-5 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ${
                proj.highlight
                  ? 'bg-gradient-to-r from-[#0f0f1c]/70 to-[#1E293B]/70 backdrop-blur-md'
                  : 'bg-[#1E293B]/60 backdrop-blur-md'
              }`}
            >
              <div className="p-3 rounded-full bg-white/10">{proj.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{proj.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{proj.description}</p>
              </div>
              <div className="text-xs font-semibold text-pink-400 whitespace-nowrap">{proj.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
