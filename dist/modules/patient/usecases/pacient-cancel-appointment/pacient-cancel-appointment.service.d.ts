import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
export declare class PatientCancelAppointmentService {
    private repo;
    private readonly notificationRepo;
    private readonly appoitmantRepo;
    constructor(repo: IPatientRepository, notificationRepo: INotificationRepository, appoitmantRepo: IAppointmentRepository);
    changeStatus(appointmantId: string): Promise<Appointments>;
}
