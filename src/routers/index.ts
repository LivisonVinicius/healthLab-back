import { Router } from "express";
import authRouter from "./authRouter";
import appointmentRouter from "./appointmentRouter";

const router = Router();

router.use(authRouter);
router.use(appointmentRouter);

export default router;
