import { CreateNotificationInput } from '../../dtos/create-notification.input';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { Notifications } from '../../entities/notification.entity';
import {
  ResponseDoctorOutput,
  ResponseInstitution,
  ResponsePatientLoggedOutput,
} from '../../dtos/notificationTypeoutput';

export abstract class INotificationRepository {
  abstract create(data: CreateNotificationInput): Promise<Notifications>;
  abstract findById(id: string): Promise<Notifications>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findClinicByUserId(id: string): Promise<ResponseInstitution>;
  abstract findPatientByUserId(
    id: string,
  ): Promise<ResponsePatientLoggedOutput>;
  abstract findDoctorUserId(id: string): Promise<ResponseDoctorOutput>;
  abstract update(
    id: string,
    notification: UpdateNotificationInput,
  ): Promise<Notifications>;
  abstract findAllNotificationPatientId(
    patientId: string,
  ): Promise<NotificationResponse[]>;

  abstract findAllNotificationClinicId(
    clinicId: string,
  ): Promise<NotificationResponse[]>;

  abstract findAllNotificationDoctorId(
    doctorId: string,
  ): Promise<NotificationResponse[]>;
}
