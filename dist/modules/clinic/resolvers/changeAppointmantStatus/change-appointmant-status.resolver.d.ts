import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { ClinicChangeAppointmentStatusService } from '../../usecases/change-appointment-status/change-appointment-status.service';
export declare class ClinicChangeAppointmantStatusResolver {
    private readonly clinicService;
    constructor(clinicService: ClinicChangeAppointmentStatusService);
    ClinicchangeAppointmantStatus(appointmantId: string, status: AppointmentStatus): Promise<Appointments>;
}
