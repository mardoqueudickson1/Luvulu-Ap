import { Appointments } from '../../entities/appointments.entity';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
export declare class ListAllAppointmentService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    listAll(): Promise<Appointments[]>;
}
