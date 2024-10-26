import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { FindAppointmentByClinicIdService } from '../../usecases/findByClinicId/find-by-clinicId-appointment.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';

@Resolver()
export class FindAppointmentByClinicIdResolver {
  constructor(
    private readonly appointmentService: FindAppointmentByClinicIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllAppointClinic])
  async findAppointmentByClinicId(@CurrentUser() clinicId: any) {
    return await this.appointmentService.execute(clinicId.id);
  }
}
