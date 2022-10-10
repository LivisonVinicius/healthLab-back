import { IAppointmentDataType } from "../types/appointmentType";
import * as appointmentRepository from "../repositories/appointmentRepository";
import * as doctorRepository from "../repositories/doctorRepository";
import * as technicianRepository from "../repositories/technicianRepository";
import * as userRepository from "../repositories/userRepository";
import * as examRepository from "../repositories/examRepository";

export async function createAppointment(
  data: IAppointmentDataType,
  userId: number
) {
  const isDoctor = await doctorRepository.getByUserId(userId);
  if (!isDoctor) {
    throw { type: "Unauthorized", message: "User is not a doctor" };
  }
  const existPatient =await userRepository.findByCpf(data.patientCpf);
  if (!existPatient) {
    throw { type: "Not Found", message: "This patient id doesn't exist" };
  }
  const existTechnician = await technicianRepository.getByUserId(
    data.technicianId
  );
  if (!existTechnician) {
    throw { type: "Not Found", message: "This technician id doesn't exist" };
  }
  const appointmentId = await appointmentRepository.insert({
    patientId: existPatient,
    doctorId: isDoctor.id,
  });
  await examRepository.insert({
    technicianId: existTechnician.id,
    appointmentId,
  });
}
