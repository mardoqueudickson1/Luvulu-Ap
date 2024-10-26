import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { Appointments } from '../../entities/appointments.entity';
export declare class FindAppointmentByDateService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    findByDate(date: Date, doctorId: string): Promise<Appointments>;
}
