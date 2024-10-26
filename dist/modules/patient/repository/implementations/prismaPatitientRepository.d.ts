import { CreatePatientPartial } from '../../../patient/dtos/create-patient.input';
import { Patients } from '../../../patient/entities/patient.entity';
import { PrismaService } from '../../../prisma/prisma.service';
import { IPatientRepository } from '../interface/IPatientRepository';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';
import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { ResponsePatientOutput, ResponseUser } from '../../dtos/reponsePatientOutput';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { changePasswordInput } from '../../dtos/change-password';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
export declare class PrismaPatitientRepositoy implements IPatientRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create({ userId, number }: CreatePatientPartial): Promise<Patients>;
    findById(userID: string): Promise<ResponsePatientOutput>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<FindAllPatientResponse[]>;
    findByEmail(email: string): Promise<Patients>;
    profile(id: string): Promise<PatientProfileOutput>;
    findPatientByUserId(id: string): Promise<ResponseUser>;
    changeAppointmentStatus(appointmentId: string, status: AppointmentStatus): Promise<Appointments>;
    updatePassword(data: changePasswordInput): Promise<Patients>;
    update(data: UpdatePatientInput): Promise<Patients>;
}
