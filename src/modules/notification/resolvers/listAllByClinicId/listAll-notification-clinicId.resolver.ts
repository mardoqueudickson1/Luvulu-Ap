import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ListAllNotificationByClinicIdService } from '../../usecases/getAllNotificationByClinicId/getAll-notification-clinicId.service';

@Resolver(() => NotificationResponse)
export class ListAllNotificationClinicIdResolver {
  constructor(
    private readonly notificationRepo: ListAllNotificationByClinicIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [NotificationResponse])
  async findAllNotificationClinicId(@CurrentUser() user: any) {
    return await this.notificationRepo.listAll(user.id);
  }
}
