/* eslint-disable @typescript-eslint/no-explicit-any */
// app/posts/[postId]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import { getSingleBlog } from "@/services/blog"
import Link from "next/link"
import { FiArrowLeft, FiCalendar, FiMapPin } from "react-icons/fi"



export default async function PostPage(props: any) {
  const res = await getSingleBlog(props?.params.blogId)
  if (!res || res instanceof Error) return notFound()
  const blog = res.data



  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          Back to Blogs
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-96 bg-gray-100">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority
            />
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
            {blog.category && (
              <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {blog.category.name}
              </span>
            )}
            
            <div className="flex items-center gap-2">
              <FiCalendar className="w-5 h-5" />
              <span className="text-sm">
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            {blog.location && (
              <div className="flex items-center gap-2">
                <FiMapPin className="w-5 h-5" />
                <span className="text-sm">{blog.location}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {blog.title}
          </h1>

          {/* Content */}
          <div 
            className="prose lg:prose-xl max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>
    </article>
  )
}