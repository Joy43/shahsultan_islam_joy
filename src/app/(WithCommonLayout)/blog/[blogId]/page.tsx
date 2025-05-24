// app/(WithCommonLayout)/blog/[blogId]/page.tsx

import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";

type BlogDetailsPageProps = {
  params: {
    blogId: string;
  };
};

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const { blogId } = params;
  const { data: blog } = await getSingleBlog(blogId);

  return (
    <main className="bg-gray-50 min-h-screen">
      <BlogDetails blog={blog} />
    </main>
  );
};

export default BlogDetailsPage;
