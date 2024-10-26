import { Appointments } from '../../entities/appointments.entity';
import { FindAppointmentByDateService } from '../../usecases/findByDate/finByDate-appointment.service';
export declare class FindAppointmentByDateResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindAppointmentByDateService);
    findAppointmentByDate(doctorId: string, date: Date): Promise<Appointments>;
}
