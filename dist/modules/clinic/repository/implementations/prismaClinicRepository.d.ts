import { PrismaService } from '../../../prisma/prisma.service';
import { IClinicRepository } from '../interface/IClinicRepository';
import { CreateClinicPartial } from '../../dtos/create-clinic.input';
import { Clinics } from '../../entities/clinic';
import { ClinicResponse, NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { ResponseClinic } from '../../dtos/clinicReponse';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { AppointmentStatus } from '@prisma/client';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';
import { institionType } from '../../dtos/instition.types';
import { FilterOptions } from '../../dtos/clinic-filter-option';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';
export declare class PrismaClinicRepositoy implements IClinicRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create({ userId, clinicLatitude, cliniclongitude, }: CreateClinicPartial): Promise<Clinics>;
    findById(userID: string): Promise<ResponseClinic>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<ClinicResponse[]>;
    findByEmail(email: string): Promise<Clinics>;
    profile(id: string): Promise<ProfileClinicOutput>;
    findClinicId(userID: string): Promise<ResponseClinic>;
    changeAppointmentStatus(appointmentId: string, newStatus: AppointmentStatus): Promise<Appointments>;
    findUserClinicId(id: string): Promise<institionType>;
    findAppoitmentByClinicId(instituitionId: string): Promise<ResponseAllAppointClinic[]>;
    clinicFilter(filterOptions: FilterOptions): Promise<NearByclinicResponse[]>;
    SearchForClinic(name: string, page: number): Promise<NearByclinicResponse[]>;
    updatePassword(data: ClinicUpdatePasswordInput): Promise<Clinics>;
    update(data: UpdateClinicInput): Promise<Clinics>;
}
