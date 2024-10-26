import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { Appointments } from '../../entities/appointments.entity';
import { ListAllAppointmentService } from '../../usecases/listAll/listaAll-appointment.service';

@Resolver(() => Appointments)
export class ListAllAppointmentsResolver {
  constructor(private readonly appointmentService: ListAllAppointmentService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Appointments])
  async findAllAppointment() {
    return await this.appointmentService.listAll();
  }
}
