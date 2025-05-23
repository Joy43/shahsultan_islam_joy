/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlog = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
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