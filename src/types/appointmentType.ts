import { Appointment } from "@prisma/client";

export type IAppointmentDataType = {
  patientCpf: string;
  technicianId: number;
};
export type IAppointmentType = Omit<Appointment, "id">;
