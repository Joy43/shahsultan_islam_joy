import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";


const blogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const { data: blog } = await getSingleBlog(blogId);

  return (
    <div>
     
      <BlogDetails blog ={blog } />
    </div>
  );
};

export default blogDetailsPage;