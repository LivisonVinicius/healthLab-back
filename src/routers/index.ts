import { Router } from "express";
import authRouter from "./authRouter";
import appointmentRouter from "./appointmentRouter";
import technicianRouter from "./technicianRouter";

const router = Router();

router.use(authRouter);
router.use(appointmentRouter);
router.use(technicianRouter);

export default router;
