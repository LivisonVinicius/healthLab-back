import { User } from "@prisma/client";
import { Doctor } from "@prisma/client";
import { Technician } from "@prisma/client";

export type IUserType = Omit<User, "id">;
export type ITechnicianType = {
  email: string;
  password: string;
  speciality: string;
};
export type ITechnicianInsertType = Omit<Technician, "id">;
export type IDoctorType = {
  email: string;
  password: string;
  speciality: string;
};
export type IDoctorInsertType = Omit<Technician, "id" | "admin">;
