import { Request, Response } from "express";
import { IAppointmentDataType } from "../types/appointmentType";
import * as appointmentService from "../services/appointmentService";
import * as technicianService from "../services/technicianService";
import * as doctorService from "../services/doctorService";
import { ExamTypes } from "@prisma/client";

export async function getBySpeciality(req: Request, res: Response) {
  const speciality: ExamTypes = res.locals.speciality;
  const userId: number = res.locals.user.id;
  console.log(speciality);
  const response = await technicianService.getBySpeciality(speciality, userId);
  console.log(response);
  return res.status(200).send(response);
}
