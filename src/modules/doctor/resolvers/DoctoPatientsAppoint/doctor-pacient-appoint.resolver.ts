import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { getDoctorAppointmentsPatientsService } from '../../usecases/DoctoPatientsAppoint/doctor-pacient-appoint.service';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';

@Resolver()
export class getDoctorAppointmentsPatientsResolver {
  constructor(private readonly repo: getDoctorAppointmentsPatientsService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllAppointPatient])
  async getDoctorAppointmentsPatients(@CurrentUser() user: any) {
    return await this.repo.findAll(user.id);
  }
}
