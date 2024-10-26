import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { FindAppointmentByclinicIdService } from '../../usecases/findByClinicId/find-by-clinicId-appointment.service';
export declare class FindAppointmentByClinicIdResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindAppointmentByclinicIdService);
    findAppointmentByClinicId(clinic: any): Promise<ResponseAllAppointPatient[]>;
}
