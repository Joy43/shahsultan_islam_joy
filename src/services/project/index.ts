/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const getAllProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

// get single product
export const getSingleProject = async (postId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project/${projectId}`, {
      next: {
        tags: ["PROJECT"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};