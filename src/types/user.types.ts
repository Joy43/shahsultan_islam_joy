export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER" | string;
  status: "ACTIVE" | "INACTIVE" | string;
  isDeleted: boolean;
  premiumUntil: string | null;
  createdAt: string;
  updatedAt: string;
}