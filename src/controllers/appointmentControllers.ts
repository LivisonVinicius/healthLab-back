import { Request, Response } from "express";
import { IAppointmentDataType } from "../types/appointmentType";
import * as appointmentService from "../services/appointmentService";
import * as technicianService from "../services/technicianService";
import * as doctorService from "../services/doctorService";

export async function createAppointment(req: Request, res: Response) {
  const data: IAppointmentDataType = req.body;
  const adminId: number = res.locals.user.id;
  await appointmentService.createAppointment(data, adminId);
  return res.status(201).send("Appointment created successfully!");
}
