import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class FindOneAppointmentService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    findOne(id: string): Promise<ResponseAllAppointPatient>;
}
