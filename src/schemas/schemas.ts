import { ObjectSchema } from "joi";

import { registerPatientSchema, loginSchema } from "./authSchemas";

const schemas: { [key: string]: ObjectSchema } = {
  registerPatientSchema,
  loginSchema,
};

export default schemas;
