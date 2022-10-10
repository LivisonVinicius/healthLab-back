import { IDoctorType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import * as doctorRepository from "../repositories/doctorRepository";

export async function registerDoctor(user: IDoctorType, userId:number) {
  const isAdmin = await doctorRepository.getByUserId(userId);
  if (!isAdmin?.admin) {
    throw { type: "Unauthorized", message: "User is not an admin" };
  }
  const existDoctor = await userRepository.findByEmail(user.email);
  if (existDoctor) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  const existTechnicianCpf = await userRepository.findByCpf(user.cpf);
  if (existTechnicianCpf) {
    throw { type: "Conflict", message: "CPF already in use" };
  }
  user.password = encrypt(user.password);
  const id = await userRepository.insert({
    email: user.email,
    password: user.password,
    name: user.name,
    cpf: user.cpf,
  });
  await doctorRepository.insert({
    userId: id,
    speciality: user.speciality,
  });
}
