import { ICategory } from "./category.type";
import { IUser } from "./user.types";




export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  categoryId: string;
  languages: string;
  livelink: string;
  githublink: string;
  gitclient: string;
  gitserver: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  user: IUser;
}
