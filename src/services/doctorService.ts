import { IDoctorType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import * as doctorRepository from "../repositories/doctorRepository";

export async function registerDoctor(user: IDoctorType) {
  const existDoctor = await userRepository.findByEmail(user.email);
  if (existDoctor) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  user.password = encrypt(user.password);
  const id = await userRepository.insert({
    email: user.email,
    password: user.password,
  });
  await doctorRepository.insert({
    userId: id,
    speciality: user.speciality,
  });
}
