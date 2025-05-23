import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";
import { notFound } from "next/navigation";

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  try {
    const { blogId } = params;
    const { data: blog } = await getSingleBlog(blogId);

    if (!blog) return notFound();

    return (
      <main className="bg-gray-50 min-h-screen">
        <BlogDetails blog={blog} />
      </main>
    );
  } catch (error) {
    return notFound();
  }
};

export default BlogDetailsPage;