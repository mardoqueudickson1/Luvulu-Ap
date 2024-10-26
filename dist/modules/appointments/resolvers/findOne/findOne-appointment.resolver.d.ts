import { FindOneAppointmentService } from '../../usecases/findOne/findOne-appointment.service';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
export declare class FindOneAppointmentResolver {
    private readonly appointmentService;
    constructor(appointmentService: FindOneAppointmentService);
    findOneAppointment(id: string): Promise<ResponseAllAppointPatient>;
}
