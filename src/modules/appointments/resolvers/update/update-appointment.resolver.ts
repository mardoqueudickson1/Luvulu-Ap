import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdateAppointmentService } from '../../usecases/update/update-appointment.service';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
import { Appointments } from '../../entities/appointments.entity';

@Resolver('appointment')
export class UpdateAppointmentResolver {
  constructor(private readonly appointmentService: UpdateAppointmentService) {}

  @Mutation(() => Appointments)
  async updateAppointment(
    @Args('updateAppointment') updateAppointment: UpdateAppointmentInput,
  ) {
    return await this.appointmentService.update(
      updateAppointment.id,
      updateAppointment,
    );
  }
}
