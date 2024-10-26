import { messages } from 'src/utils/shared/errorsMessages';

import { Injectable, NotFoundException } from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { Appointments } from '../../entities/appointments.entity';

@Injectable()
export class FindAppointmentByDateService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async findByDate(date: Date, doctorId: string): Promise<Appointments> {
    const result = await this.appointmentRepo.findByDate(date, doctorId);

    if (!result) {
      throw new NotFoundException(messages.appointmentNotFound);
    }
    return result;
  }
}
