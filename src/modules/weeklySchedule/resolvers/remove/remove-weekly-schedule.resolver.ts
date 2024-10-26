import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { RemoveWeeklyScheduleService } from '../../usecases/remove/remove-weekly-schedule.service';
import { WeeklyScheduleOutput } from '../../dtos/Weekly-schedule-output';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class RemoveWeeklyScheduleResolver {
  constructor(private readonly repo: RemoveWeeklyScheduleService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => WeeklyScheduleOutput)
  async removeWorkCalendar(@Args('id', { type: () => String }) id: string) {
    return await this.repo.remove(id);
  }
}
