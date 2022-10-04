import { Request, Response } from "express";
import { IUserType, IDoctorType, ITechnicianType } from "../types/userType";
import * as patientService from "../services/patientService";

export async function registerPatient(req: Request, res: Response) {
  const user: IUserType = req.body;
  await patientService.registerPatient(user);
  return res.status(201).send("Patient created successfully!");
}
