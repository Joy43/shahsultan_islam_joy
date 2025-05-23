
import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";


const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const { data: blogs } = await getSingleBlog(blogId);

  return (
    <div>
      
      <BlogDetails blogs={blogs} />
    </div>
  );
};

export default ProductDetailsPage;