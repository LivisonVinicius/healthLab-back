import { client } from "../database";
import { IDoctorInsertType } from "../types/userType";

export async function insert(user: IDoctorInsertType) {
  await client.doctor.create({ data: user });
  return;
}

export async function getByUserId(id: number) {
  const doctorData = await client.doctor.findFirst({ where: { userId: id } });
  return doctorData;
}
