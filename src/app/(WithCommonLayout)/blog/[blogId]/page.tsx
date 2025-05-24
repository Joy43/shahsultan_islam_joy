import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";
import { notFound } from "next/navigation";

interface BlogDetailsPageProps {
  params: {
    blogId: string;
  };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  try {
    const { blogId } = params;

    if (!blogId) {
      throw new Error("Blog ID is required");
    }

    const { data: blog } = await getSingleBlog(blogId);

    return (
      <main className="bg-gray-50 min-h-screen">
        <BlogDetails blog={blog} />
      </main>
    );
  } catch (error) {
    console.error("Blog fetch failed:", error);
    notFound(); // Show the 404 page
  }
};

export default BlogDetailsPage;
