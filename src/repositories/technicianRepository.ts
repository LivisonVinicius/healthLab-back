import { ExamTypes } from "@prisma/client";
import { client } from "../database";
import { ITechnicianInsertType } from "../types/userType";
import * as userRepository from "./userRepository";

export async function insert(user: ITechnicianInsertType) {
  await client.technician.create({ data: user });
  return;
}

export async function getByUserId(user: number) {
  return await client.technician.findFirst({ where: { userId: user } });
}

export async function getUserBySpeciality(speciality: ExamTypes) {
  const techArray = await client.technician.findMany({ where: { speciality } });
  if (techArray) {
    const newTechArray = await Promise.all(
      techArray.map(async (obj) => await userRepository.findById(obj.userId))
    );
    const response = [];
    for (let i = 0; i < newTechArray.length; i++) {
      response.push({
        technicianId: newTechArray[i]?.id,
        name: newTechArray[i]?.name,
      });
    }
    return response;
  }
  return [];
}
