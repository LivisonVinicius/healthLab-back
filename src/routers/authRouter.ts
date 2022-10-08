import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import * as authControllers from "../controllers/authControllers";

const authRouter = Router();

authRouter.post(
  "/signup/patient",
  schemaValidator("registerPatientSchema"),
  authControllers.registerPatient
);

authRouter.post(
  "/signup/technician",
  schemaValidator("registerTechnicianSchema"),
  authControllers.registerTechnician
)

authRouter.post(
  "/signin",
  schemaValidator("loginSchema"),
  authControllers.login
);

export default authRouter;
