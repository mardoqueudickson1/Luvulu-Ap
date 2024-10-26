import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../../auth/decorator/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreateAppointmentService } from '../../usecases/create/create-appointment.service';
import { Appointments } from '../../entities/appointments.entity';
import { CreateAppointInput } from '../../dtos/create-appointment.input';

@Resolver('appointment')
export class CreateAppointmentResolver {
  constructor(private readonly appointmentService: CreateAppointmentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Appointments)
  async createAppointment(
    @CurrentUser() user: any,
    @Args('appointmentInput') appointmentInput: CreateAppointInput,
  ) {
    appointmentInput.patientId = user.id;
    return await this.appointmentService.create(appointmentInput);
  }
}
