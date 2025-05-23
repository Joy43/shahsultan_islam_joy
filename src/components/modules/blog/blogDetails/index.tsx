import { IBlogs } from "@/types/blog.types";

const BlogDetails = ({ blogs }: { blogs: IBlogs }) => {
  return (
    <div>
      {/* Render blog details here */}
      <h2>{blogs.title}</h2>
      <p>{blogs.description}</p>
    </div>
  );
};

export default BlogDetails;