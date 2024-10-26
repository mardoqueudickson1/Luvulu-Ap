import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import { UpdateNotificationService } from '../../usecases/update/update-notification.service';
import { Notifications } from '../../entities/notification.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver('notification')
export class UpdateNotificationResolver {
  constructor(
    private readonly notificationService: UpdateNotificationService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Notifications)
  async updateNotification(
    @Args('notificationInput') notification: UpdateNotificationInput,
  ) {
    return await this.notificationService.update(notification.id, notification);
  }
}
