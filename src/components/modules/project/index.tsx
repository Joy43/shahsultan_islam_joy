'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project.type';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#111827] to-[#3B0764] p-6 md:p-8 text-white w-full max-w-5xl mx-auto mb-12 shadow-2xl border border-white/10"
    >
      <Link href={`/project/${project._id}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(project.languages)
                ? project.languages.map((lang: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium uppercase tracking-wide bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))
                : typeof project.languages === 'string' && (
                    <span className="text-xs font-medium uppercase tracking-wide bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full">
                      {project.languages}
                    </span>
                  )}
            </div>

            {/* Description */}
            <p
              className="text-sm text-gray-300 mb-6 line-clamp-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {/* Icons Only */}
            <div className="flex flex-wrap gap-3">
              {project.githublink && (
                <Link
                  href={project.githublink}
                  target="_blank"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
                >
                  <FiGithub className="text-lg" />
                </Link>
              )}
              {project.livelink && (
                <Link
                  href={project.livelink}
                  target="_blank"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-sm"
                >
                  <FiExternalLink className="text-lg" />
                </Link>
              )}
              {project.gitserver && (
                <>
                  <Link
                    href={project.gitserver}
                    target="_blank"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
                  >
                    <FiFileText className="text-lg" />
                  </Link>
                  <Link
                    href={project.gitserver}
                    target="_blank"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
                  >
                    <FiGithub className="text-lg" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectPage = ({ projects = [] }: { projects?: IProject[] }) => {
  return (
    <section className="bg-[#0F172A] py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
          My Projects
        </h1>

        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p className="text-white text-center pt-20">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
