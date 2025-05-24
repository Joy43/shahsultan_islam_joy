
import AllBlogs from "@/components/modules/blog";
import { getAllBlog } from "@/services/blog";
export default async function BlogPage() {
  const { data: blogs } = await getAllBlog();
  return <AllBlogs blogs={blogs} />;
}