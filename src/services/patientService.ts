import { IUserType } from "../types/userType";
import { compare, encrypt } from "../utils/bcryptFunctions";
import * as userRepository from "../repositories/userRepository";
import { sign } from "../utils/jwtFunctions";
import * as technicianRepository from "../repositories/technicianRepository";
import * as doctorRepository from "../repositories/doctorRepository";

export async function registerPatient(user: IUserType) {
  const existPatient = await userRepository.findByEmail(user.email);
  if (existPatient) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  const existTechnicianCpf = await userRepository.findByCpf(user.cpf);
  if (existTechnicianCpf) {
    throw { type: "Conflict", message: "Cpf already in use" };
  }
  user.password = encrypt(user.password);
  await userRepository.insert({
    email: user.email,
    password: user.password,
    name: user.name,
    cpf: user.cpf,
  });
}

export async function loginUser(user: IUserType) {
  const existUser = await userRepository.findByEmail(user.email);
  if (!existUser) {
    throw { type: "Unauthorized", message: "Password or Email wrong" };
  }
  if (!compare(user.password, existUser.password)) {
    throw { type: "Unauthorized", message: "Password or Email wrong" };
  }
  if (await technicianRepository.getByUserId(existUser.id)) {
  }
  const token = sign({ id: existUser.id });
  const role = await verifyRole(existUser.id);
  const resObj = { token, name: existUser.name, role };
  return resObj;
}

async   function verifyRole(id: number) {
  const technician = await technicianRepository.getByUserId(id);
  if (technician) {
    return "technician";
  }
  const doctor = await doctorRepository.getByUserId(id);
  if (doctor) {
    if (doctor.admin) {
      return "admin";
    }
    return "doctor";
  }
  return "patient";
}
