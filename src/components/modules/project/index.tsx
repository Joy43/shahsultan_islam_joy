'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IProject } from '@/types/project.type'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi'

const ProjectCard = ({ project, index }: { project: IProject; index: number }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, zIndex: 99 - index }}
      className="min-h-screen flex items-center justify-center sticky top-0 px-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764]"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center text-white"
      >
        {/* Image section */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {project?.languages}
          </div>

          <div
            className="text-sm text-gray-300 mb-6 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          <div className="flex flex-wrap gap-4">
            {project.githublink && (
              <Link href={project.githublink} target="_blank" className="btn-secondary">
                <FiGithub className="text-lg" />
                <span className="text-sm">Repository</span>
              </Link>
            )}
            {project.livelink && (
              <Link href={project.livelink} target="_blank" className="btn-primary">
                <FiExternalLink className="text-lg" />
                <span className="text-sm">Live Demo</span>
              </Link>
            )}
            {project.gitserver && (
              <>
                <Link href={project.gitserver} target="_blank" className="btn-outline">
                  <FiFileText className="text-lg" />
                  <span className="text-sm">Documentation</span>
                </Link>
                <Link href={project.gitserver} target="_blank" className="btn-secondary">
                  <FiGithub className="text-lg" />
                  <span className="text-sm">Server</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectPage = ({ projects = [] }: { projects?: IProject[] }) => {
  return (
    <div className="h-[500vh] relative">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))
      ) : (
        <p className="text-white text-center pt-20">No projects found.</p>
      )}
    </div>
  )
}

export default ProjectPage;
