import { client } from "../database";
import { IDoctorInsertType } from "../types/userType";

export async function insert(user: IDoctorInsertType) {
  await client.doctor.create({ data: user });
  return;
}
