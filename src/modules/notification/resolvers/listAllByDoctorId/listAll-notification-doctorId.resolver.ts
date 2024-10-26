import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ListAllNotificationByDoctorIdService } from '../../usecases/getAllNotificationBydoctorId/getAll-notification-doctorId.service';

@Resolver(() => NotificationResponse)
export class ListAllNotificationDoctorIdResolver {
  constructor(
    private readonly notificationRepo: ListAllNotificationByDoctorIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [NotificationResponse])
  async findAllNotificationDoctorID(@CurrentUser() user: any) {
    return await this.notificationRepo.listAll(user.id);
  }
}
