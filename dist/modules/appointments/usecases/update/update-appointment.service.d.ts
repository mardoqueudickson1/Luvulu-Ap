import { Appointments } from '../../entities/appointments.entity';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
export declare class UpdateAppointmentService {
    private readonly repo;
    constructor(repo: IAppointmentRepository);
    update(id: string, data: UpdateAppointmentInput): Promise<Appointments>;
}
