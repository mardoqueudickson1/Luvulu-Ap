import { GqlAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { RemoveAppointmentService } from '../../usecases/remove/remove-appointment.service';
import { Appointments } from '../../entities/appointments.entity';

@Resolver('appointment')
export class RemoveAppointmentResolver {
  constructor(private readonly appointmentService: RemoveAppointmentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Appointments)
  async removeDoctor(@Args('id', { type: () => Int }) id: string) {
    return await this.appointmentService.remove(id);
  }
}
