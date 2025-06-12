import { ICategory } from "./category.type";
import { IUser } from "./user.types";

export interface IBlogs {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  language: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  user: IUser;
}
