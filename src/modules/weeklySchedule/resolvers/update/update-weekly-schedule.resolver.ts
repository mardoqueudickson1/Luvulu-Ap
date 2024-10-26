import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { updateWeeklyScheduleService } from '../../usecases/update/update-weekly-schedule..service';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class UpdateWeeklyScheduleesolver {
  constructor(private readonly repo: updateWeeklyScheduleService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => WeeklySchedules)
  async updateWorkCalenar(@Args('data') weekInput: UpdateWeeklySchedule) {
    return await this.repo.update(weekInput.id, weekInput);
  }
}
