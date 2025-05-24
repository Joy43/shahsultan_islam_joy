'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { PuffLoader } from "react-spinners"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { ICategory } from "@/types/category.type"
import { IBlogs } from "@/types/blog.types"
import { getAllCategories } from "@/services/category"
import { getAllBlog } from "@/services/blog"

const POSTS_PER_PAGE = 6

export default function PostsPage() {
  const [blogs, setBlogs] = useState<IBlogs[]>([])
  const [allCategories, setAllCategories] = useState<ICategory[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const params = useSearchParams()

  // Filters
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState(params.get("category") || "")
  const [location, setLocation] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories()
        setAllCategories(res?.data || [])
      } catch (err) {
        console.error("Failed to load categories", err)
      }
    }
    fetchCategories()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await getAllBlog(String(currentPage), String(POSTS_PER_PAGE), {
        searchTerm,
        category,
        location,
        minPrice,
        maxPrice,
      })
      setBlogs(res?.data || [])
      setTotalPages(Math.ceil((res?.meta?.total || 1) / POSTS_PER_PAGE))
    } catch (error) {
      console.error("Failed to fetch posts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [searchTerm, category, location, currentPage])

  const handleFilter = () => setCurrentPage(1)
  const resetFilters = () => {
    setSearchTerm("")
    setCategory("")
    setLocation("")
    setMinPrice("")
    setMaxPrice("")
    setCurrentPage(1)
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-1">Explore Blogs</h1>
        <p className="text-gray-600">Discover insights, trends, and stories from our community.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <div className="flex-1 flex gap-2">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search by title or location..."
            className="w-full p-2 border rounded-md shadow-sm text-sm"
          />
          <button
            onClick={handleFilter}
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-opacity-90 transition"
          >
            Search
          </button>
        </div>
        <button
          onClick={resetFilters}
          className="text-sm underline text-gray-600 hover:text-black"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 p-4 border rounded-md bg-white shadow-sm space-y-4">
          <h2 className="text-lg font-semibold">Filters</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
              placeholder="e.g., Dhaka"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full p-2 border rounded-md text-sm"
            >
              <option value="">All Categories</option>
              {allCategories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleFilter}
            className="w-full py-2 text-sm font-medium bg-primary text-white rounded hover:bg-opacity-90 transition"
          >
            Apply Filters
          </button>
        </aside>

        {/* Blog Cards */}
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center items-center h-[300px]">
              <PuffLoader color="#FF3C48" size={80} />
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                  <div className="group relative bg-white rounded-md shadow hover:shadow-lg transition overflow-hidden">
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">{blog.title}</h3>
                      <div
                        className="text-sm text-gray-600 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="p-2 border rounded hover:bg-primary hover:text-white disabled:opacity-50"
              >
                <BsArrowLeft />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded border ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-2 border rounded hover:bg-primary hover:text-white disabled:opacity-50"
              >
                <BsArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
