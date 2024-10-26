import { messages } from 'src/utils/shared/errorsMessages';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ListAllNotificationByDoctorIdService {
  constructor(private readonly notificationRepo: INotificationRepository) {}

  async listAll(doctorId: string): Promise<NotificationResponse[]> {
    const doctor = await this.notificationRepo.findDoctorUserId(doctorId);

    if (!doctor) {
      throw new NotFoundException(messages.doctorNotFound);
    }

    const notification =
      await this.notificationRepo.findAllNotificationDoctorId(doctor.doctor.id);

    if (!notification) {
      throw new NotFoundException(messages.notificationNotFound);
    }

    return notification;
  }
}
