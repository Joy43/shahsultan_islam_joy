
'use client';

import { IBlogs } from "@/types/blog.types";
import { BlogFilters } from "@/types/blogFilter.types";
import { useMemo, useState } from "react";
import FilterSidebar from "./filterSidebar";
import Image from "next/image";
import Link from "next/link";


const AllBlogs = ({ blogs }: { blogs: IBlogs[] }) => {
  const [filters, setFilters] = useState<BlogFilters>({
    searchTerm: "",
    category: "",
    location: "",
  });

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === "" || 
        blog.category?.id === filters.category;
      
      const matchesLocation = filters.location === "" || 
        blog.location.toLowerCase().includes(filters.location.toLowerCase());

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [blogs, filters]);

  return (
    <div className="flex gap-8 my-10 container mx-auto px-4">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <section className="flex-1">
        {filteredBlogs.length === 0 ? (
          <div
            title="No blogs found"
           
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    {blog.category && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full mr-2">
                        {blog.category.name}
                      </span>
                    )}
                    {blog.location && (
                      <span className="flex items-center">
                       
                        {blog.location}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {blog.description}
                  </p>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                   <Link href={``}>
                    Read More
                   </Link>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AllBlogs;