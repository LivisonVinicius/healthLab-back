import { Request, Response } from "express";
import { IPatientType, IDoctorType, ITechnicianType } from "../types/userType";
import * as patientService from "../services/patientService";

export async function registerPatient(req: Request, res: Response) {
  const user: IPatientType = req.body;
  await patientService.registerPatient(user);
  return res.status(201).send("Patient created successfully!");
}
