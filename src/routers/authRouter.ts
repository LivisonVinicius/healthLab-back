import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import * as authControllers from "../controllers/authControllers";
import validateToken from "../middlewares/tokenValidator";

const authRouter = Router();

authRouter.post(
  "/signup/patient",
  schemaValidator("registerPatientSchema"),
  authControllers.registerPatient
);

authRouter.post(
  "/signup/technician",
  validateToken,
  schemaValidator("registerTechnicianSchema"),
  authControllers.registerTechnician
);

authRouter.post(
  "/signup/doctor",
  validateToken,
  schemaValidator("registerDoctorSchema"),
  authControllers.registerDoctor
);

authRouter.post(
  "/signin",
  schemaValidator("loginSchema"),
  authControllers.login
);

export default authRouter;
