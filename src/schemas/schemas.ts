import { ObjectSchema } from "joi";

import {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
  registerDoctorSchema,
} from "./authSchemas";

const schemas: { [key: string]: ObjectSchema } = {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
  registerDoctorSchema,
};

export default schemas;
