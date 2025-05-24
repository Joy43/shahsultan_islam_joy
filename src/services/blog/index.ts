
"use server";

export const getAllBlog = async (
  page?: string,
  limit?: string,
  query: { [key: string]: string | undefined } = {}
) => {
  const params = new URLSearchParams();

  if (query.searchTerm) params.append("searchTerm", query.searchTerm);
  if (query.category) params.append("category", query.category);
  if (query.location) params.append("location", query.location);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/blog?page=${page}&limit=${limit}&${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    }
  );
  const data = await res.json();
  return data;
};

// get single product
export const getSingleBlog = async (blogId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog/${blogId}`, {
      next: {
        tags: ["BLOG"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};