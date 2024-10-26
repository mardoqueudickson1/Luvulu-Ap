import { AppointmentStatus } from '@prisma/client';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
export declare class ChangeAppointmantStatusResolver {
    private readonly doctorService;
    constructor(doctorService: IDoctorRepository);
    changeAppointmantStatusByDoctor(appointmantId: string, status: AppointmentStatus): Promise<Appointments>;
}
