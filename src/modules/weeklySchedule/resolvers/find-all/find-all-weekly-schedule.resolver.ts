import { Query, Resolver } from '@nestjs/graphql';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { FindAllWeeklyScheduleService } from '../../usecases/find-all/find-all-weekly-schedule.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class FindAllWeeklyScheduleResolver {
  constructor(private readonly repo: FindAllWeeklyScheduleService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [WeeklySchedules])
  async findAllWeeklySchedule() {
    return this.repo.findAll();
  }
}
