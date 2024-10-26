import { CreateDoctorPartial } from '../../dtos/create-doctor.input';
import { PrismaService } from '../../../prisma/prisma.service';
import { IDoctorRepository } from '../interface/IDoctorRepository';
import { Doctors } from '../../entities/doctor.entity';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { ResponseDoctor, ResponseUser } from '../../dtos/response-doctor';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
import { InstitutionIResponse, ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';
import { AssociateDoctorInput, AssociateDoctorResponse } from '../../dtos/doctorInstitution';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
import { changeDoctorPasswordInput } from '../../dtos/change-password';
export declare class PrismaDoctorRepositoy implements IDoctorRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findAllDoctorNear(): Promise<ResponseAllDoctor[]>;
    findUser(id: string): Promise<ResponseUser>;
    findById(userID: string): Promise<ResponseDoctor>;
    profile(id: string): Promise<ResponseProfileDoctor>;
    create({ userId, registrationNumber, specialty, bio, institutionId, }: CreateDoctorPartial): Promise<Doctors>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<ResponseAllDoctor[]>;
    findDoctorByClinicId(id: string): Promise<ResponseAllDoctor[]>;
    findByEmail(email: string): Promise<Doctors>;
    getScheduleByDoctorId(doctorId: string): Promise<DoctorScheduleOutput>;
    associateDoctor(data: AssociateDoctorInput): Promise<AssociateDoctorResponse>;
    desasociateDoctor(data: AssociateDoctorInput): Promise<{
        message: string;
    }>;
    isDoctorAssociatedWithClinic(doctorId: string, institutionId: string): Promise<AssociateDoctorResponse>;
    changeAppointmentStatus(appointmentId: string, newStatus: AppointmentStatus): Promise<Appointments>;
    findClinicOFDoctor(id: string): Promise<InstitutionIResponse[]>;
    DoctorFilter(filterOptions: DoctorFilterOptions): Promise<TopResponseAllDoctor[]>;
    SearchDoctor(name: string, page: number): Promise<TopResponseAllDoctor[]>;
    getDoctorAppointmentsPatients(patientId: string): Promise<ResponseAllAppointPatient[]>;
    updatePassword(data: changeDoctorPasswordInput): Promise<Doctors>;
    update(doctor: UpdateDoctorInput): Promise<Doctors>;
}
