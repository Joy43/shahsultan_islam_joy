import BlogDetails from "@/components/modules/blog/blogDetails";
import { getSingleBlog } from "@/services/blog";
const BlogDetailsPage = async ({
   params 
  }: {
    params:Promise<{blogId:string}>;
  })=>{
    const {blogId}=await params ;
    const {data:blog}=await getSingleBlog(blogId)
  

    return (
      <main className="bg-gray-50 min-h-screen">
        <BlogDetails blog={blog} />
      </main>
    );
  
};

export default BlogDetailsPage;
