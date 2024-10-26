import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { ClinicChangeAppointmentStatusService } from '../../usecases/change-appointment-status/change-appointment-status.service';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('ClinicChangeAppointmantStatusResolver')
export class ClinicChangeAppointmantStatusResolver {
  constructor(
    private readonly clinicService: ClinicChangeAppointmentStatusService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Appointments)
  async ClinicchangeAppointmantStatus(
    @Args('appointmantId') appointmantId: string,
    @Args('status') status: AppointmentStatus,
  ) {
    return await this.clinicService.changeStatus(appointmantId, status);
  }
}
