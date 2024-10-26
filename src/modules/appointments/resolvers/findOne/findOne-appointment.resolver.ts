import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { FindOneAppointmentService } from '../../usecases/findOne/findOne-appointment.service';
// import { Appointments } from '../../entities/appointments.entity';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Resolver()
export class FindOneAppointmentResolver {
  constructor(private readonly appointmentService: FindOneAppointmentService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ResponseAllAppointPatient)
  async findOneAppointment(@Args('id', { type: () => String }) id: string) {
    return await this.appointmentService.findOne(id);
  }
}
