import { client } from "../database";
import { IPatientType } from "../types/userType";

export async function insert(user: IPatientType) {
  await client.patient.create({ data: user });
  return;
}

export async function findByEmail(email: string) {
  const user = await client.patient.findFirst({ where: { email } });
  return user;
}

export async function findById(id: number) {
  const user = await client.patient.findFirst({ where: { id } });
  return user;
}
