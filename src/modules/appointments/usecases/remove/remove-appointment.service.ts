import { Injectable, NotFoundException } from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class RemoveAppointmentService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const appointment = await this.appointmentRepo.findById(id);

      if (!appointment) {
        throw new NotFoundException(messages.appointmentNotFound);
      }

      return await this.appointmentRepo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
