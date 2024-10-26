import { PrismaService } from '../../../prisma/prisma.service';
import { INotificationRepository } from '../interface/INotificaionRepository';
import { CreateNotificationInput } from '../../dtos/create-notification.input';
import { Notifications } from '../../entities/notification.entity';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { ResponseDoctorOutput, ResponseInstitution, ResponsePatientLoggedOutput } from '../../dtos/notificationTypeoutput';
export declare class PrismaNotificationsRepositoy implements INotificationRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(notificationInput: CreateNotificationInput): Promise<Notifications>;
    findById(id: string): Promise<Notifications>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findClinicByUserId(id: string): Promise<ResponseInstitution>;
    findDoctorUserId(id: string): Promise<ResponseDoctorOutput>;
    findPatientByUserId(id: string): Promise<ResponsePatientLoggedOutput>;
    update(id: string, notification: UpdateNotificationInput): Promise<Notifications>;
    findAllNotificationPatientId(patientId: string): Promise<NotificationResponse[]>;
    findAllNotificationDoctorId(doctorId: string): Promise<NotificationResponse[]>;
    findAllNotificationClinicId(clinicId: string): Promise<NotificationResponse[]>;
}
