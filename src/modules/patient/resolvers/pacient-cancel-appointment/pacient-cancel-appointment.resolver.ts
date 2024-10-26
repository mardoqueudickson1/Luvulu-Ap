import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { PatientCancelAppointmentService } from '../../usecases/pacient-cancel-appointment/pacient-cancel-appointment.service';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class PatientCancelAppointmentResolver {
  constructor(private readonly repo: PatientCancelAppointmentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Appointments)
  async patientCancelAppointment(
    @Args('id') id: string,
  ): Promise<Appointments> {
    return await this.repo.changeStatus(id);
  }
}
