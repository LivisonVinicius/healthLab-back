import { client } from "../database";
import { IExamType } from "../types/examTypes";

export async function insert(data: IExamType) {
  await client.exam.create({ data: data });
  return;
}

export async function getAppointmentById(id: number) {
  return await client.appointment.findFirst({ where: { id: id } });
}
