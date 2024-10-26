import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { ListAllNotificationByPatientService } from '../../usecases/getAllNotificationBypatientId/getAll-notification-patientId.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver(() => NotificationResponse)
export class ListAllNotificationPatientResolver {
  constructor(
    private readonly notificationRepo: ListAllNotificationByPatientService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [NotificationResponse])
  async findAllNotificationPatientId(@CurrentUser() user: any) {
    return await this.notificationRepo.listAll(user.id);
  }
}
