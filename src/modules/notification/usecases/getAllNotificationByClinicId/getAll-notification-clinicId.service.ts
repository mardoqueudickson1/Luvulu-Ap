import { messages } from 'src/utils/shared/errorsMessages';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ListAllNotificationByClinicIdService {
  constructor(private readonly notificationRepo: INotificationRepository) {}

  async listAll(clinicId: string): Promise<NotificationResponse[]> {
    const institution =
      await this.notificationRepo.findClinicByUserId(clinicId);

    const notification =
      await this.notificationRepo.findAllNotificationClinicId(
        institution.institution.id,
      );

    if (!notification) {
      throw new NotFoundException(messages.notificationNotFound);
    }

    return notification;
  }
}
