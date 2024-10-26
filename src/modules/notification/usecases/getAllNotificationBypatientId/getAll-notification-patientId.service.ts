import { messages } from 'src/utils/shared/errorsMessages';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ListAllNotificationByPatientService {
  constructor(private readonly notificationRepo: INotificationRepository) {}

  async listAll(patientId: string): Promise<NotificationResponse[]> {
    const patient = await this.notificationRepo.findPatientByUserId(patientId);

    if (!patient) {
      throw new NotFoundException(messages.patientNotFound);
    }

    const notification =
      await this.notificationRepo.findAllNotificationPatientId(
        patient.patientId.id,
      );

    if (!notification) {
      throw new NotFoundException(messages.notificationNotFound);
    }

    return notification;
  }
}
