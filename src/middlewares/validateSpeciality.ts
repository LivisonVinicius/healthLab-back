import { ExamTypes } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const specialityList = [
  "BloodCount",
  "Genetic",
  "Kidney",
  "Laboratory",
  "Prenatal",
  "Thyroid",
  "Urinalysis",
  "Radiology",
  "Tomography",
];
export default function validateSpeciality(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const speciality = req.params.speciality;
  console.log(speciality);
  for (let i = 0; i < specialityList.length; i++) {
    if (specialityList[i] === speciality) {
      res.locals.speciality = speciality as ExamTypes;
      next();
      return;
    }
  }
  throw { type: "Unprocessable Entity", message: "Invalid speciality" };
}
