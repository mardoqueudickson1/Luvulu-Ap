import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
export declare class RemoveAppointmentService {
    private readonly appointmentRepo;
    constructor(appointmentRepo: IAppointmentRepository);
    remove(id: string): Promise<void>;
}
