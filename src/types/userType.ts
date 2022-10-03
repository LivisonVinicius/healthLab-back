import { Patient } from "@prisma/client";
import { Doctor } from "@prisma/client";
import { Technician } from "@prisma/client";

export type IPatientType = Omit<Patient, "id">;
export type IDoctorType = Omit<Doctor, "id">;
export type ITechnicianType = Omit<Technician, "id">;
