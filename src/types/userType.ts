import { User } from "@prisma/client";
import { Doctor } from "@prisma/client";
import { Technician } from "@prisma/client";

export type IUserType = Omit<User, "id">;
export type IDoctorType = Omit<Doctor, "id">;
export type ITechnicianType = Omit<Technician, "id">;
