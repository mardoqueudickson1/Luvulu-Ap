import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';

@Resolver('ChangeAppointmantStatusResolver')
export class ChangeAppointmantStatusResolver {
  constructor(private readonly doctorService: IDoctorRepository) {}

  @Mutation(() => Appointments)
  async changeAppointmantStatusByDoctor(
    @Args('appointmantId') appointmantId: string,
    @Args('status') status: AppointmentStatus,
  ) {
    return await this.doctorService.changeAppointmentStatus(
      appointmantId,
      status,
    );
  }
}
