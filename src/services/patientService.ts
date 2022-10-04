import { IUserType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";

export async function registerPatient(user: IUserType) {
  const existPatient = await userRepository.findByEmail(user.email);
  if (existPatient) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  user.password = encrypt(user.password);
  await userRepository.insert({
    email: user.email,
    password: user.password,
  });
}
