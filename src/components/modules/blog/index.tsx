
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full sm:w-[80%] md:w-[60%] shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                   className="w-full h-[200px] rounded-t-md object-cover"
                  />
                </div>
                
                <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3 p-2">
                 
                    {blog.location && (
                      <span className="flex items-center">
                       
                        {blog.location}
                      </span>
                    )}
                  </div>
                 <div
            className="text-sm text-gray-300 mb-6 line-clamp-3 p-02"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
                  <button className="w-full py-2 px-4 bg-red-500 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                   <Link href={`/blog/${blog.id}`}>
                    Read More
                   </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AllBlogs;