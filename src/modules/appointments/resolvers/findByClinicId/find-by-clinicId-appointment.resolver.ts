import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { FindAppointmentByclinicIdService } from '../../usecases/findByClinicId/find-by-clinicId-appointment.service';

@Resolver()
export class FindAppointmentByClinicIdResolver {
  constructor(
    private readonly appointmentService: FindAppointmentByclinicIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllAppointPatient])
  async findAppointmentByClinicId(@CurrentUser() clinic: any) {
    return await this.appointmentService.execute(clinic.id);
  }
}
