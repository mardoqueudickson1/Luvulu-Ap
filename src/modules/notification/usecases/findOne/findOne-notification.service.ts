import { messages } from 'src/utils/shared/errorsMessages';

import { Injectable, NotFoundException } from '@nestjs/common';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { Notifications } from '../../entities/notification.entity';

@Injectable()
export class FindOneNotificationService {
  constructor(private readonly notificationRepo: INotificationRepository) {}

  async findOne(id: string): Promise<Notifications> {
    const notification = await this.notificationRepo.findById(id);

    if (!notification) {
      throw new NotFoundException(messages.notificationNotFound);
    }
    return notification;
  }
}
