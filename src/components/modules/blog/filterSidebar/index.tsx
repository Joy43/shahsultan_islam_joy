'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { BlogFilters } from "@/types/blogFilter.types";
import { getAllCategories } from "@/services/category";

interface Category {
  _id: string;
  name: string;
  image: string;
}

interface FilterSidebarProps {
  filters: BlogFilters;
  setFilters: React.Dispatch<React.SetStateAction<BlogFilters>>;
}

const FilterSidebar = ({ filters, setFilters }: FilterSidebarProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getAllCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories. Please try again later.");
        console.error("Category fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-72 space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>
        <div className="space-y-5">

          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Search posts..."
              value={filters.searchTerm}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Category List */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            {loading ? (
              <div className="flex justify-center items-center h-10">Loading...</div>
            ) : error ? (
              <p className="text-red-500 text-sm">{error}</p>
            ) : (
              <ul className="space-y-2">
                {/* All Categories */}
                <li
                  onClick={() => setFilters((prev) => ({ ...prev, category: "" }))}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 ${
                    !filters.category ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center text-white font-bold text-xs">
                    All
                  </div>
                  <span className="text-gray-800">All Categories</span>
                </li>

                {/* Fetched Categories */}
                {categories.map((cat) => (
                  <li
                    key={cat._id}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, category: cat._id }))
                    }
                    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 ${
                      filters.category === cat._id ? "bg-blue-100 font-semibold" : ""
                    }`}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                    width={100}
                    height={100}
                      className="w-10 h-10 object-cover rounded-md border"
                    />
                    <span className="text-gray-800">{cat.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location..."
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterSidebar;
