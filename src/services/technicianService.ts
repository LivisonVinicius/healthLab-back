import { ITechnicianType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import * as technicianRepository from "../repositories/technicianRepository";

export async function registerTechnician(user: ITechnicianType) {
  const existTechnician = await userRepository.findByEmail(user.email);
  if (existTechnician) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  user.password = encrypt(user.password);
  const id = await userRepository.insert({
    email: user.email,
    password: user.password,
  });
  await technicianRepository.insert({
    userId: id,
    speciality: user.speciality,
  });
}
