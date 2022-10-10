import { Router } from "express";
import * as technicianControllers from "../controllers/technicianController";
import validateToken from "../middlewares/tokenValidator";
import validateSpeciality from "../middlewares/validateSpeciality";

const technicianRouter = Router();

technicianRouter.get(
  "/technician/:speciality",
  validateToken,
  validateSpeciality,
  technicianControllers.getBySpeciality
);

export default technicianRouter;
