import joi from "joi";

import { joiPasswordExtendCore } from "joi-password";

const joiPassword = joi.extend(joiPasswordExtendCore);

export const registerPatientSchema = joi.object({
  email: joi.string().email().required(),
  password: joiPassword
    .string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .minOfSpecialCharacters(1)
    .required()
    .messages({
      "password.min": "{#label} should contain at least {#min}",
      "password.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character",
      "password.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character",
      "password.minOfNumeric":
        "{#label} should contain at least {#min} numeric character",
      "password.noWhiteSpaces": "{#label} should not contain white spaces",
    }),
  name: joi.string().required(),
  cpf: joi
    .string()
    .pattern(/^[0-9]+$/)
    .min(11)
    .required(),
});

export const registerTechnicianSchema = joi.object({
  email: joi.string().email().required(),
  password: joiPassword
    .string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .minOfSpecialCharacters(1)
    .required()
    .messages({
      "password.min": "{#label} should contain at least {#min}",
      "password.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character",
      "password.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character",
      "password.minOfNumeric":
        "{#label} should contain at least {#min} numeric character",
      "password.noWhiteSpaces": "{#label} should not contain white spaces",
    }),
  speciality: joi
    .string()
    .valid(
      "BloodCount",
      "Genetic",
      "Kidney",
      "Laboratory",
      "Prenatal",
      "Thyroid",
      "Urinalysis",
      "Radiology",
      "Tomography"
    )
    .required(),
  name: joi.string().required(),
  cpf: joi
    .string()
    .pattern(/^[0-9]+$/)
    .min(11)
    .required(),
});

export const registerDoctorSchema = joi.object({
  email: joi.string().email().required(),
  password: joiPassword
    .string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .minOfSpecialCharacters(1)
    .required()
    .messages({
      "password.min": "{#label} should contain at least {#min}",
      "password.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character",
      "password.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character",
      "password.minOfNumeric":
        "{#label} should contain at least {#min} numeric character",
      "password.noWhiteSpaces": "{#label} should not contain white spaces",
    }),
  speciality: joi.string().required(),
  name: joi.string().required(),
  cpf: joi
    .string()
    .pattern(/^[0-9]+$/)
    .min(11)
    .required(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
