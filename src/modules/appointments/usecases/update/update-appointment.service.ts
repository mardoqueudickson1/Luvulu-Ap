import { Injectable } from '@nestjs/common';

import { Appointments } from '../../entities/appointments.entity';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';

@Injectable()
export class UpdateAppointmentService {
  constructor(private readonly repo: IAppointmentRepository) {}

  async update(
    id: string,
    data: UpdateAppointmentInput,
  ): Promise<Appointments> {
    const appointments = await this.repo.update(id, data);
    return appointments;
  }
}
