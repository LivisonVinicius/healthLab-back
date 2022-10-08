import { Request, Response } from "express";
import { IUserType, ITechnicianType } from "../types/userType";
import * as patientService from "../services/patientService";
import * as technicianService from "../services/technicianService";

export async function registerPatient(req: Request, res: Response) {
  const user: IUserType = req.body;
  await patientService.registerPatient(user);
  return res.status(201).send("Patient created successfully!");
}

export async function login(req: Request, res: Response) {
  const user: IUserType = req.body;
  const token = await patientService.loginUser(user);
  return res.status(201).send(token);
}

export async function registerTechnician(req: Request, res: Response) {
  const user: ITechnicianType = req.body;
  await technicianService.registerTechnician(user);
  return res.status(201).send("Technician created successfully!");
}
