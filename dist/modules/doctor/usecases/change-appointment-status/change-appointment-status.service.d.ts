import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
export declare class ChangeAppointmentStatusService {
    private readonly repo;
    private readonly notificationRepo;
    private readonly appoitmantRepo;
    constructor(repo: IDoctorRepository, notificationRepo: INotificationRepository, appoitmantRepo: IAppointmentRepository);
    changeStatus(appointmantId: string, status: AppointmentStatus): Promise<Appointments>;
}
