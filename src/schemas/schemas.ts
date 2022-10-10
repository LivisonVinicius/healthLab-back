import { ObjectSchema } from "joi";

import {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
  registerDoctorSchema,
} from "./authSchemas";
import { createAppointmentSchema } from "./appointmentsSchemas";
const schemas: { [key: string]: ObjectSchema } = {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
  registerDoctorSchema,
  createAppointmentSchema,
};

export default schemas;
