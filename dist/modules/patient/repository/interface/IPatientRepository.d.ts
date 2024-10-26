import { AppointmentStatus } from '@prisma/client';
import { CreatePatientPartial } from '../../dtos/create-patient.input';
import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';
import { ResponsePatientOutput, ResponseUser } from '../../dtos/reponsePatientOutput';
import { Patients } from '../../entities/patient.entity';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { changePasswordInput } from '../../dtos/change-password';
import { UpdatePatientInput } from '../../dtos/update-patient.input';
export declare abstract class IPatientRepository {
    abstract create({ userId, number }: CreatePatientPartial): Promise<Patients>;
    abstract findById(id: string): Promise<ResponsePatientOutput>;
    abstract findPatientByUserId(id: string): Promise<ResponseUser>;
    abstract remove({ id }: {
        id: string;
    }): Promise<void>;
    abstract findByEmail(email: string): Promise<Patients | null>;
    abstract profile(id: string): Promise<PatientProfileOutput>;
    abstract findAll(): Promise<FindAllPatientResponse[]>;
    abstract changeAppointmentStatus(appointmantId: string, status: AppointmentStatus): Promise<Appointments>;
    abstract updatePassword(data: changePasswordInput): Promise<Patients>;
    abstract update(data: UpdatePatientInput): Promise<Patients>;
}
