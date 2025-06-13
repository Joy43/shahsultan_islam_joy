'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types/project.type";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";

const ProjectDetails: React.FC<{ singleprojectdata: IProject }> = ({ singleprojectdata }) => {
  const {
    title,
    description,
    image,
    languages,
    livelink,
    githublink,
    gitserver,
    category,
    user
  } = singleprojectdata;

  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6">{title}</h1>

        {/* Image */}
        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>

        {/* Description */}
        <div
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Tech Stack */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">🛠 Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {languages.split(",").map((lang, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/20 text-sm px-3 py-1 rounded-full uppercase"
              >
                {lang.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4">
          {livelink && (
            <Link
              href={livelink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 transition"
            >
              <FiExternalLink /> Live Demo
            </Link>
          )}
          {githublink && (
            <Link
              href={githublink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              <FiGithub /> GitHub Client
            </Link>
          )}
          {gitserver && (
            <>
              <Link
                href={gitserver}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
              >
                <FiFileText /> GitHub Server
              </Link>
            </>
          )}
        </div>

        {/* Category & Author Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="font-semibold text-lg mb-2">📂 Category</h4>
            <p>{category?.name}</p>
            {category?.image && (
              <div className="relative w-full h-40 mt-2 rounded-lg overflow-hidden">
                <Image src={category.image} alt={category.name} fill className="object-cover" />
              </div>
            )}
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="font-semibold text-lg mb-2">👤 Author</h4>
            <p className="mb-1">Name: {user?.fullName}</p>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
            <p>Status: {user?.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
