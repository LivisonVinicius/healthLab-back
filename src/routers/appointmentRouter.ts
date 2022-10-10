import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import * as appointmentControllers from "../controllers/appointmentControllers";
import validateToken from "../middlewares/tokenValidator";

const appointmentRouter = Router();

appointmentRouter.post(
  "/createAppointment",
  validateToken,
  schemaValidator("createAppointmentSchema"),
  appointmentControllers.createAppointment
);

export default appointmentRouter;
