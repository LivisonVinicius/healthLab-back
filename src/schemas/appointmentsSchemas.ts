import joi from "joi";

export const createAppointmentSchema = joi.object({
  patientCpf: joi
    .string()
    .pattern(/^[0-9]+$/)
    .min(11)
    .required(),
  technicianId: joi.number().required(),
});
