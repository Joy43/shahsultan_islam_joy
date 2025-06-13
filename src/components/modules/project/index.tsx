"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IProject } from "@/types/project.type";
import { getAllCategories } from "@/services/category";
import FilterProject from "./Filteproject/page";
import { motion } from "framer-motion";

const ProjectPage = ({ projects }: { projects: IProject[] }) => {
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      if (response?.data && Array.isArray(response.data)) {
        const names = response.data.map((cat: { name: string }) => cat.name);
        setCategories(names);
      }
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (category: string) => {
    if (!category) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category?.name?.toLowerCase() === category.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="px-4 py-8">
      <FilterProject categories={categories} onFilterChange={handleFilterChange} />

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Link href={`/project/${project.id}`} className="block">
              <div className="rounded-3xl bg-[#0F172A]/80 backdrop-blur-lg p-6 md:p-10 text-white w-full shadow-xl border border-white/10 transition-all hover:shadow-2xl hover:border-white/20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                  <div className="relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-white/5 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white/90 hover:text-white hover:underline">
                      {project.title}
                    </h2>

                    {project.category?.name && (
                      <span className="inline-block text-xs font-medium uppercase tracking-wide bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full shadow-sm">
                        {project.category.name}
                      </span>
                    )}

                    {project.languages && (
                      <div className="flex flex-wrap gap-2">
                        {typeof project.languages === "string" &&
                          project.languages.split(",").map((lang, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium uppercase tracking-wide bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full shadow-sm"
                            >
                              {lang.trim()}
                            </span>
                          ))}
                      </div>
                    )}

                    <div className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                      <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.githublink && (
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-sm backdrop-blur-md">
                          <FiGithub className="text-lg" />
                          <span>GitHub</span>
                        </p>
                      )}
                      {project.gitclient && (
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-sm backdrop-blur-md">
                          <FiGithub className="text-lg" />
                          <span>Client Code</span>
                        </p>
                      )}
                      {project.gitserver && (
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-sm backdrop-blur-md">
                          <FiGithub className="text-lg" />
                          <span>Server Code</span>
                        </p>
                      )}
                      {project.livelink && (
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 transition-all text-sm">
                          <FiExternalLink className="text-lg" />
                          <span>Live Demo</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
