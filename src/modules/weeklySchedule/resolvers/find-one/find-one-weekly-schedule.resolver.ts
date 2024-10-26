import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindOneWeeklyScheduleService } from '../../usecases/find-one/find-one-weekly-schedule.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';

@Resolver()
export class FindOneWeeklyScheduleResolver {
  constructor(private readonly repo: FindOneWeeklyScheduleService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [WeeklySchedules])
  async findOneWeeklySchedule(@Args('id', { type: () => String }) id: string) {
    return await this.repo.findOnde(id);
  }
}
