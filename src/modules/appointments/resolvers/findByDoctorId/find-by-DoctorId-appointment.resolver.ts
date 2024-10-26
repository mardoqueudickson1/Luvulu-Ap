import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { FindAppointmentBydoctorIdService } from '../../usecases/findByDoctortId/find-by-doctorId-appointment.service';

@Resolver()
export class FindAppointmentByDoctorIdResolver {
  constructor(
    private readonly appointmentService: FindAppointmentBydoctorIdService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [ResponseAllAppointPatient])
  async findAppointmentByDoctorId(@CurrentUser() doctor: any) {
    return await this.appointmentService.execute(doctor.id);
  }
}
