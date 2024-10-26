import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { IDoctorRepository } from 'src/modules/doctor/repository/interface/IDoctorRepository';
import { IUserRepository } from 'src/modules/user/repository/interface/IUserRepository';
export declare class ClinicChangeAppointmentStatusService {
    private readonly repo;
    private readonly notificationRepo;
    private readonly appoitmantRepo;
    private readonly doctorRepo;
    private readonly clinicRepo;
    private readonly userRepo;
    constructor(repo: IClinicRepository, notificationRepo: INotificationRepository, appoitmantRepo: IAppointmentRepository, doctorRepo: IDoctorRepository, clinicRepo: IClinicRepository, userRepo: IUserRepository);
    changeStatus(appointmantId: string, status: AppointmentStatus): Promise<Appointments>;
}
