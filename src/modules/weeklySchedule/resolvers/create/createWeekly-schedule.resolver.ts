import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateWeeklyScheduleService } from '../../usecases/create/create-weekly-schedule.service';
import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';

@Resolver('CreateWeeklySchedule')
export class CreateWeeklyScheduleResolver {
  constructor(private readonly WeeklySchedule: CreateWeeklyScheduleService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => WeeklySchedules)
  async CreateWeeklySchedule(
    @CurrentUser() user: any,
    @Args('weekInput') weekInput: WeeklyScheduleDTO,
  ) {
    weekInput.doctorId = user.id;
    return await this.WeeklySchedule.create(weekInput);
  }
}
