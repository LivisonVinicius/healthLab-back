import { ITechnicianType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import * as technicianRepository from "../repositories/technicianRepository";
import * as doctorRepository from "../repositories/doctorRepository";
import { ExamTypes } from "@prisma/client";

export async function registerTechnician(
  user: ITechnicianType,
  userId: number
) {
  const isAdmin = await doctorRepository.getByUserId(userId);
  if (!isAdmin?.admin) {
    throw { type: "Unauthorized", message: "User is not an admin" };
  }
  const existTechnicianEmail = await userRepository.findByEmail(user.email);
  if (existTechnicianEmail) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  const existTechnicianCpf = await userRepository.findByCpf(user.cpf);
  if (existTechnicianCpf) {
    throw { type: "Conflict", message: "Cpf already in use" };
  }
  user.password = encrypt(user.password);
  const id = await userRepository.insert({
    email: user.email,
    password: user.password,
    name: user.name,
    cpf: user.cpf,
  });
  await technicianRepository.insert({
    userId: id,
    speciality: user.speciality,
  });
}

export async function getBySpeciality(speciality: ExamTypes, userId: number) {
  const isDoctor = await doctorRepository.getByUserId(userId);
  if (!isDoctor) {
    throw { type: "Unauthorized", message: "User is not an doctor" };
  }
  const techArray = await technicianRepository.getUserBySpeciality(speciality);
  return techArray;
}
