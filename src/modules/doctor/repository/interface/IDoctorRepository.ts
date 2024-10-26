import { CreateDoctorPartial } from '../../dtos/create-doctor.input';
import { Doctors } from '../../entities/doctor.entity';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { ResponseDoctor, ResponseUser } from '../../dtos/response-doctor';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
import {
  InstitutionIResponse,
  ResponseAllDoctor,
} from '../../dtos/response-all-doctor';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';

import {
  AssociateDoctorInput,
  AssociateDoctorResponse,
} from '../../dtos/doctorInstitution';

import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
import { changeDoctorPasswordInput } from '../../dtos/change-password';

export abstract class IDoctorRepository {
  abstract create({
    userId,
    registrationNumber,
    specialty,
    bio,
    institutionId,
  }: CreateDoctorPartial): Promise<Doctors>;
  abstract findById(id: string): Promise<ResponseDoctor>;
  abstract findDoctorByClinicId(id: string): Promise<ResponseAllDoctor[]>;
  abstract findUser(id: string): Promise<ResponseUser>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(): Promise<ResponseAllDoctor[]>;
  abstract findAllDoctorNear(): Promise<ResponseAllDoctor[]>;
  abstract findByEmail(email: string): Promise<Doctors | null>;
  abstract update(doctor: UpdateDoctorInput): Promise<Doctors>;
  abstract profile(id: string): Promise<ResponseProfileDoctor>;
  abstract getScheduleByDoctorId(
    doctorId: string,
  ): Promise<DoctorScheduleOutput>;
  abstract associateDoctor(
    data: AssociateDoctorInput,
  ): Promise<AssociateDoctorResponse>;
  abstract isDoctorAssociatedWithClinic(
    doctorId: string,
    institutionId: string,
  ): Promise<AssociateDoctorResponse>;
  abstract desasociateDoctor(
    data: AssociateDoctorInput,
  ): Promise<{ message: string }>;

  abstract changeAppointmentStatus(
    appointmentId: string,
    newStatus: AppointmentStatus,
  ): Promise<Appointments>;
  abstract findClinicOFDoctor(id: string): Promise<InstitutionIResponse[]>;
  abstract DoctorFilter(
    doctorFilterOptions: DoctorFilterOptions,
  ): Promise<TopResponseAllDoctor[]>;
  abstract SearchDoctor(
    name: string,
    page: number,
  ): Promise<TopResponseAllDoctor[]>;

  abstract getDoctorAppointmentsPatients(
    id: string,
  ): Promise<ResponseAllAppointPatient[]>;
  abstract updatePassword(data: changeDoctorPasswordInput): Promise<Doctors>;
}
