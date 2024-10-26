import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class FindAppointmentBydoctorIdService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    execute(id: string): Promise<ResponseAllAppointPatient[]>;
}
