import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { PrismaWeeklyScheduleRepository } from './repository/implementations/prisma-WorkCalendarRepository';
import { IWeeklyScheduleRepository } from './repository/interface/IWeeklyScheduleRepository';
import { CreateWeeklyScheduleResolver } from './resolvers/create/createWeekly-schedule.resolver';
import { CreateWeeklyScheduleService } from './usecases/create/create-weekly-schedule.service';
import { FindAllWeeklyScheduleService } from './usecases/find-all/find-all-weekly-schedule.service';
import { FindOneWeeklyScheduleService } from './usecases/find-one/find-one-weekly-schedule.service';
import { updateWeeklyScheduleService } from './usecases/update/update-weekly-schedule..service';
import { RemoveWeeklyScheduleService } from './usecases/remove/remove-weekly-schedule.service';
import { FindAllWeeklyScheduleResolver } from './resolvers/find-all/find-all-weekly-schedule.resolver';
import { FindOneWeeklyScheduleResolver } from './resolvers/find-one/find-one-weekly-schedule.resolver';
import { UpdateWeeklyScheduleesolver } from './resolvers/update/update-weekly-schedule.resolver';
import { RemoveWeeklyScheduleResolver } from './resolvers/remove/remove-weekly-schedule.resolver';
import { FindAllWeeklyScheduleByClinicIdResolver } from './resolvers/find-by-clinicId/find-all-weekly-schedule.resolver';
import { FindWeeklyScheduleByClinicIdService } from './usecases/find-by-clinicId/find-all-weekly-schedule.service';

@Module({
  imports: [PrismaModule],

  providers: [
    CreateWeeklyScheduleService,
    FindAllWeeklyScheduleService,
    FindOneWeeklyScheduleService,
    updateWeeklyScheduleService,
    RemoveWeeklyScheduleService,
    FindWeeklyScheduleByClinicIdService,

    CreateWeeklyScheduleResolver,
    FindAllWeeklyScheduleResolver,
    FindOneWeeklyScheduleResolver,
    UpdateWeeklyScheduleesolver,
    RemoveWeeklyScheduleResolver,
    FindAllWeeklyScheduleByClinicIdResolver,

    {
      provide: IWeeklyScheduleRepository,
      useClass: PrismaWeeklyScheduleRepository,
    },
  ],
})
export class WeeklyScheduleModule {}
