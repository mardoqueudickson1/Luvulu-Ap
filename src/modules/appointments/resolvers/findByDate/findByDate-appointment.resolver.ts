import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Appointments } from '../../entities/appointments.entity';
import { FindAppointmentByDateService } from '../../usecases/findByDate/finByDate-appointment.service';

@Resolver()
export class FindAppointmentByDateResolver {
  constructor(
    private readonly appointmentService: FindAppointmentByDateService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Appointments)
  async findAppointmentByDate(
    @Args('doctorId', { type: () => String }) doctorId: string,
    @Args('date', { type: () => String })
    date: Date,
  ) {
    return await this.appointmentService.findByDate(date, doctorId);
  }
}
