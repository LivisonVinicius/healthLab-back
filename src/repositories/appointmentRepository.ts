import { client } from "../database";
import { IAppointmentType } from "../types/appointmentType";

export async function insert(data: IAppointmentType) {
  const appointment = await client.appointment.create({ data: data });
  return appointment.id;
}

export async function getAppointmentById(id: number) {
  return await client.appointment.findFirst({ where: { id: id } });
}
