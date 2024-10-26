import { UpdateAppointmentService } from '../../usecases/update/update-appointment.service';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
import { Appointments } from '../../entities/appointments.entity';
export declare class UpdateAppointmentResolver {
    private readonly appointmentService;
    constructor(appointmentService: UpdateAppointmentService);
    updateAppointment(updateAppointment: UpdateAppointmentInput): Promise<Appointments>;
}
