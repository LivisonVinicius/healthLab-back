import { IPatientType } from "../types/userType";
import { encrypt } from "../utils/bcryptFunctions";
import * as patientRepository from "../repositories/patientRepository";

export async function registerPatient(user: IPatientType) {
  const existPatient = await patientRepository.findByEmail(user.email);
  if (existPatient) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  user.password = encrypt(user.password);
  await patientRepository.insert({
    email: user.email,
    password: user.password,
  });
}
