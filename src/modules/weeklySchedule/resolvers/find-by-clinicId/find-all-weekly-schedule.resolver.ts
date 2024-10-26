import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { FindWeeklyScheduleByClinicIdService } from '../../usecases/find-by-clinicId/find-all-weekly-schedule.service';

@Resolver()
export class FindAllWeeklyScheduleByClinicIdResolver {
  constructor(private readonly repo: FindWeeklyScheduleByClinicIdService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [WeeklySchedules])
  async findWeeklyScheduleByClinicId(@Args('id') id: string) {
    return this.repo.findAll(id);
  }
}
