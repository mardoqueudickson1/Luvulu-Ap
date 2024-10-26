import { FindAppointmentByClinicIdService } from '../../usecases/findByClinicId/find-by-clinicId-appointment.service';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';
export declare class FindAppointmentByClinicIdResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindAppointmentByClinicIdService);
    findAppointmentByClinicId(clinicId: any): Promise<ResponseAllAppointClinic[]>;
}
