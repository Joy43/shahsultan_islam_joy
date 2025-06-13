"use client";

import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaServer, FaCode, FaDatabase, FaBoxes } from "react-icons/fa";

interface Props {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const iconMap: Record<string, JSX.Element> = {
  "Front-end": <FaCode />,
  "App": <FaMobileAlt />,
  "Back-end": <FaServer />,
  "Database": <FaDatabase />,
  "Web Architecture": <FaGlobe />,
  "Others": <FaBoxes />,
};

const FilterProject = ({ categories, onFilterChange }: Props) => {
  const [selected, setSelected] = useState("");

  const handleFilter = (category: string) => {
    setSelected(category);
    onFilterChange(category);
  };

  const getIcon = (category: string) => {
    return iconMap[category] || <FaBoxes />;
  };

  return (
    <div className="flex bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B0764] flex-wrap gap-4 justify-center py-6 px-4 rounded-xl shadow-inner mb-8">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => handleFilter("")}
        className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 text-sm font-medium shadow-md transition-all ${
          selected === "" ? "bg-purple-700 text-white border-purple-500" : "bg-white/10 text-white border-white/20 hover:bg-white/20"
        }`}
      >
        <FaBoxes className="text-white" />
        All
      </motion.button>

      {categories.map((category) => (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          key={category}
          onClick={() => handleFilter(category)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 text-sm font-medium shadow-md transition-all ${
            selected === category
              ? "bg-purple-700 text-white border-purple-500"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
          }`}
        >
          {getIcon(category)}
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterProject;
