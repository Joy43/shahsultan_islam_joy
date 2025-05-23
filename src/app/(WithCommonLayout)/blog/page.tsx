import AllBlogs from "@/components/modules/blog";
import { getAllBlog } from "@/services/blog";


const Blogpages = async() => {
    const {data:blogs}=await getAllBlog();
  return (
    <>
    <AllBlogs blogs={blogs}/>
    </>
  )
}

export default Blogpages;