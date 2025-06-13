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
export const getSingleProject = async (projectId: string) => {
  if (!projectId) return { error: 'Missing project ID' };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project/${projectId}`, {
      next: {
        tags: ["PROJECT"],
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch project with ID: ${projectId}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return { error: error.message };
  }
};
