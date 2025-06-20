"use server";


// ----------get all categories --------------
export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project-category`,{
      next:{
        tags:["CATEGORY"]
      }
    });

    return res.json();
  }catch (error) {
    if (error instanceof Error) {
      return new Error(error.message);
    }
    return new Error("An unknown error occurred");
  }
};