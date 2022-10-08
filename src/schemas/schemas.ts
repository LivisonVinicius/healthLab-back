import { ObjectSchema } from "joi";

import {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
} from "./authSchemas";

const schemas: { [key: string]: ObjectSchema } = {
  registerPatientSchema,
  loginSchema,
  registerTechnicianSchema,
};

export default schemas;
