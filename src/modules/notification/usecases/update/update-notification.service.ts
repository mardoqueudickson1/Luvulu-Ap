import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../repository/interface/INotificaionRepository';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { Notifications } from '../../entities/notification.entity';

@Injectable()
export class UpdateNotificationService {
  constructor(private readonly repo: INotificationRepository) {}

  async update(
    id: string,
    data: UpdateNotificationInput,
  ): Promise<Notifications> {
    const notification = await this.repo.update(id, data);
    return notification;
  }
}
