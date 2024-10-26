import { Appointments } from '../../entities/appointments.entity';
import { ListAllAppointmentService } from '../../usecases/listAll/listaAll-appointment.service';
export declare class ListAllAppointmentsResolver {
    private readonly appointmentService;
    constructor(appointmentService: ListAllAppointmentService);
    findAllAppointment(): Promise<Appointments[]>;
}
