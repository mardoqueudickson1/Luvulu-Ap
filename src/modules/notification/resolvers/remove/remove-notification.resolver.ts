import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { RemoveNotificationService } from '../../usecases/remove/remove-notification.service';
import { Notifications } from '../../entities/notification.entity';

@Resolver('notification')
export class RemoveNotificationResolver {
  constructor(private readonly notificationRepo: RemoveNotificationService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Notifications)
  async removeNotification(@Args('id', { type: () => Int }) id: string) {
    return await this.notificationRepo.remove(id);
  }
}
