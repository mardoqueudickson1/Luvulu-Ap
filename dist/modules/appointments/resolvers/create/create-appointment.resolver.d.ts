import { CreateAppointmentService } from '../../usecases/create/create-appointment.service';
import { Appointments } from '../../entities/appointments.entity';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
export declare class CreateAppointmentResolver {
    private readonly appointmentService;
    constructor(appointmentService: CreateAppointmentService);
    createAppointment(user: any, appointmentInput: CreateAppointInput): Promise<Appointments>;
}
