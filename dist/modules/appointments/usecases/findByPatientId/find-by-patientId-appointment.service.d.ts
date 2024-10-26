import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class FindAppointmentByPatientIdService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    execute(patientId: string): Promise<ResponseAllAppointPatient[]>;
}
