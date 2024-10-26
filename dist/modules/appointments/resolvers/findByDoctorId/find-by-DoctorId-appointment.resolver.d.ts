import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { FindAppointmentBydoctorIdService } from '../../usecases/findByDoctortId/find-by-doctorId-appointment.service';
export declare class FindAppointmentByDoctorIdResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindAppointmentBydoctorIdService);
    findAppointmentByDoctorId(doctor: any): Promise<ResponseAllAppointPatient[]>;
}
