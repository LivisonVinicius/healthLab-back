import { client } from "../database";
import { ITechnicianInsertType } from "../types/userType";

export async function insert(user: ITechnicianInsertType) {
  await client.technician.create({ data: user });
  return;
}
