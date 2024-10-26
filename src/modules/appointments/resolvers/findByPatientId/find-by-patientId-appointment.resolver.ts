import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { FindAppointmentByPatientIdService } from '../../usecases/findByPatientId/find-by-patientId-appointment.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Resolver()
export class FindAppointmentByPatientIdResolver {
  constructor(
    private readonly appointmentService: FindAppointmentByPatientIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllAppointPatient])
  async findAppointmentByPatientId(@CurrentUser() patient: any) {
    return await this.appointmentService.execute(patient.id);
  }
}
