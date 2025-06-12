'use client';

import React, { useState } from 'react';

const techIcons: Record<string, string> = {
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'GraphSql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Sql lite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Expo': 'https://miro.medium.com/v2/resize:fit:1024/1*kepX0EHTbLc6O9mRKsierg.png',
  'Android studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Vercel': 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/152x152.png',
  'Chart.js': 'https://www.chartjs.org/media/logo-title.svg',
};

export interface SkillTypes {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'database' | 'app' | 'devops';
  tech: string[];
  description: string;
}

export const SkillData: SkillTypes[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'frontend',
    tech: ['Next.js', 'Tailwind CSS'],
    description: 'Personal portfolio to showcase my work.',
  },
  {
    id: 2,
    title: 'REST API Server',
    type: 'backend',
    tech: ['Node.js', 'Express'],
    description: 'Backend API for managing data and user authentication.',
  },
  {
    id: 3,
    title: 'Database Setup',
    type: 'database',
    tech: ['MongoDB', 'GraphSql', 'Mysql', 'Sql lite'],
    description: 'Remote database setup with security rules.',
  },
  {
    id: 4,
    title: 'Mobile App UI',
    type: 'app',
    tech: ['React Native', 'Expo', 'Android studio'],
    description: 'Mobile UI for e-commerce platform.',
  },
  {
    id: 5,
    title: 'CI/CD Pipeline',
    type: 'devops',
    tech: ['GitHub Actions', 'Vercel'],
    description: 'Automated deployment for frontend and backend.',
  },
  {
    id: 6,
    title: 'Admin Dashboard',
    type: 'frontend',
    tech: ['Next.js', 'Chart.js'],
    description: 'Admin UI to manage analytics and users.',
  },
];

const Skillpage = () => {
  const types = ['frontend', 'backend', 'database', 'app', 'devops'];
  const [selectedTypes, setSelectedTypes] = useState<string[]>([...types]);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      // Remove type
      const updated = selectedTypes.filter((t) => t !== type);
      setSelectedTypes(updated.length === 0 ? [...types] : updated); // Reset to all if empty
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredSkills = SkillData.filter((skill) =>
    selectedTypes.includes(skill.type)
  );

  return (
    <section className="px-4 py-10 md:px-8 lg:px-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764] min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">My Skills</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition duration-300 ${
              selectedTypes.includes(type)
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-100'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredSkills.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm mb-2 text-purple-200 capitalize">
              <strong className="text-purple-400">Type:</strong> {item.type}
            </p>
            <p className="text-sm text-gray-200 mb-4">{item.description}</p>

            <div className="flex flex-wrap gap-2">
              {item.tech.map((techName) => (
                <div
                  key={techName}
                  className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm text-white hover:bg-purple-600 transition"
                >
                  {techIcons[techName] && (
                    <img src={techIcons[techName]} alt={techName} className="w-4 h-4" />
                  )}
                  <span>{techName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillpage;
