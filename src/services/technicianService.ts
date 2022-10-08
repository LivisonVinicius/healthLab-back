import { ITechnicianType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import * as technicianRepository from "../repositories/technicianRepository";

export async function registerTechnician(user: ITechnicianType) {
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
