import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';
import { GetScheduleDoctorByIdService } from '../../usecases/getSchedule/get-schedule.service';

@Resolver()
export class GetScheduuleDoctorByIdResolver {
  constructor(private readonly doctorService: GetScheduleDoctorByIdService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => DoctorScheduleOutput)
  async getScheduleById(@Args('id', { type: () => String }) id: string) {
    return await this.doctorService.execute(id);
  }
}
