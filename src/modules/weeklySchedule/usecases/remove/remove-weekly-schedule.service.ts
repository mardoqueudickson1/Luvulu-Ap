import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from 'src/utils/shared/errorsMessages';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';

@Injectable()
export class RemoveWeeklyScheduleService {
  constructor(private repo: IWeeklyScheduleRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const doctor = await this.repo.findById(id);

      if (!doctor) {
        throw new NotFoundException(messages.calendarNotFound);
      }

      return await this.repo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
