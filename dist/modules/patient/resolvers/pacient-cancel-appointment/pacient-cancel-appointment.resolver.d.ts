import { PatientCancelAppointmentService } from '../../usecases/pacient-cancel-appointment/pacient-cancel-appointment.service';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
export declare class PatientCancelAppointmentResolver {
    private readonly repo;
    constructor(repo: PatientCancelAppointmentService);
    patientCancelAppointment(id: string): Promise<Appointments>;
}
