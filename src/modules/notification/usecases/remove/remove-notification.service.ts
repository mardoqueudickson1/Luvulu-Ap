import { Injectable, NotFoundException } from '@nestjs/common';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class RemoveNotificationService {
  constructor(private readonly notificationRepo: INotificationRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const notification = await this.notificationRepo.findById(id);

      if (!notification) {
        throw new NotFoundException(messages.notificationNotFound);
      }

      return await this.notificationRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
