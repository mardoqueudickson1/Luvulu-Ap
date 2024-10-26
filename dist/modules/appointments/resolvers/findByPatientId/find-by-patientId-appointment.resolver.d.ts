import { FindAppointmentByPatientIdService } from '../../usecases/findByPatientId/find-by-patientId-appointment.service';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class FindAppointmentByPatientIdResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindAppointmentByPatientIdService);
    findAppointmentByPatientId(patient: any): Promise<ResponseAllAppointPatient[]>;
}
