"use client";

import React, { useState } from "react";

interface Props {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const FilterProject = ({ categories, onFilterChange }: Props) => {
  const [selected, setSelected] = useState("");

  const handleFilter = (category: string) => {
    setSelected(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <button
        onClick={() => handleFilter("")}
        className={`px-4 py-2 rounded-full border ${
          selected === "" ? "bg-purple-600 text-white" : "bg-white/10 text-white hover:bg-white/20"
        } transition-all`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={`px-4 py-2 rounded-full border ${
            selected === category
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white hover:bg-white/20"
          } transition-all`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterProject;
