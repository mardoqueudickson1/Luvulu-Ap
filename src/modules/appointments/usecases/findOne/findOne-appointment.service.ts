import { messages } from 'src/utils/shared/errorsMessages';

import { Injectable, NotFoundException } from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Injectable()
export class FindOneAppointmentService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async findOne(id: string): Promise<ResponseAllAppointPatient> {
    try {
      const result = await this.appointmentRepo.findById(id);

      if (!result) {
        throw new NotFoundException(messages.appointmentNotFound);
      }

      return result;
    } catch (errors) {
      throw new NotFoundException(messages.internalServerError);
    }
  }
}
