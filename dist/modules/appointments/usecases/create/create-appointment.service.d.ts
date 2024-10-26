import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
import { IWeeklyScheduleRepository } from 'src/modules/weeklySchedule/repository/interface/IWeeklyScheduleRepository';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IMedicalHistoryRepository } from 'src/modules/MedicalHistory/repository/interface/IMedicalHistoryRepository';
import { IClinicRepository } from 'src/modules/clinic/repository/interface/IClinicRepository';
import { IPatientRepository } from 'src/modules/patient/repository/interface/IPatientRepository';
import { Appointments } from '../../entities/appointments.entity';
export declare class CreateAppointmentService {
    private readonly appointmentRepo;
    private readonly weeklyScheduleRepo;
    private readonly notificationRepo;
    private readonly medicalRepoHistory;
    private readonly institutionRepo;
    private readonly patientRepo;
    constructor(appointmentRepo: IAppointmentRepository, weeklyScheduleRepo: IWeeklyScheduleRepository, notificationRepo: INotificationRepository, medicalRepoHistory: IMedicalHistoryRepository, institutionRepo: IClinicRepository, patientRepo: IPatientRepository);
    create(appointInput: CreateAppointInput): Promise<Appointments>;
}
