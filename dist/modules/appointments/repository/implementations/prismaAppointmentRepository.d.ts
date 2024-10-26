import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IAppointmentRepository } from '../interface/IAppointmentRepository';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
import { Appointments } from '../../entities/appointments.entity';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
import { AppointmentType } from '../../dtos/appointment.types';
import { IFindAllInDayFromProvider } from '../../dtos/IFindAllInDayFromProvider.output';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class PrismaAppointmentRepositoy implements IAppointmentRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findUser(id: string): Promise<AppointmentType>;
    findById(id: string): Promise<ResponseAllAppointPatient>;
    update(id: string, doctor: UpdateAppointmentInput): Promise<Appointments>;
    create(input: CreateAppointInput): Promise<Appointments>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<Appointments[]>;
    findByDate(date: Date, doctorId: string): Promise<Appointments | undefined>;
    findAllInDayFromProvider({ doctorId, day, month, year, }: IFindAllInDayFromProvider): Promise<Appointments[]>;
    findAllInMonthFromProvider({ doctorId, month, year, }: IFindAllInDayFromProvider): Promise<Appointments[]>;
    findAppoitmentByPatientId(patientId: string): Promise<ResponseAllAppointPatient[]>;
    findAppoitmentByDoctorId(id: string): Promise<ResponseAllAppointPatient[]>;
    findAppoitmentByclinicId(id: string): Promise<ResponseAllAppointPatient[]>;
}
