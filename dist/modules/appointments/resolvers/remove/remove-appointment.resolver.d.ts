import { RemoveAppointmentService } from '../../usecases/remove/remove-appointment.service';
export declare class RemoveAppointmentResolver {
    private readonly appointmentService;
    constructor(appointmentService: RemoveAppointmentService);
    removeDoctor(id: string): Promise<void>;
}
