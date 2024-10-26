import { Notifications } from '../../entities/notification.entity';
import { FindOneNotificationService } from '../../usecases/findOne/findOne-notification.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class FindOneNotificationResolver {
  constructor(private readonly notificationRepo: FindOneNotificationService) {}

  @Query(() => Notifications)
  async findOneNotification(@Args('id', { type: () => String }) id: string) {
    return await this.notificationRepo.findOne(id);
  }
}
