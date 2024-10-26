import { AppointmentStatus } from '@prisma/client';
import { ResponseClinic } from '../../dtos/clinicReponse';
import { CreateClinicPartial } from '../../dtos/create-clinic.input';
import { ClinicResponse, NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { Clinics } from '../../entities/clinic';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';
import { institionType } from '../../dtos/instition.types';
import { FilterOptions } from '../../dtos/clinic-filter-option';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';
export declare abstract class IClinicRepository {
    abstract create({ userId }: CreateClinicPartial): Promise<Clinics>;
    abstract remove({ id }: {
        id: string;
    }): Promise<void>;
    abstract findAll(): Promise<ClinicResponse[]>;
    abstract findUserClinicId(id: string): Promise<institionType>;
    abstract findByEmail(email: string): Promise<Clinics | null>;
    abstract profile(id: string): Promise<ProfileClinicOutput>;
    abstract findById(id: string): Promise<ResponseClinic>;
    abstract changeAppointmentStatus(appointmentId: string, newStatus: AppointmentStatus): Promise<Appointments>;
    abstract findAppoitmentByClinicId(id: string): Promise<ResponseAllAppointClinic[]>;
    abstract clinicFilter(filterOptions: FilterOptions): Promise<NearByclinicResponse[]>;
    abstract SearchForClinic(name: string, page: number): Promise<NearByclinicResponse[]>;
    abstract updatePassword(data: ClinicUpdatePasswordInput): Promise<Clinics>;
    abstract update(data: UpdateClinicInput): Promise<Clinics>;
}
