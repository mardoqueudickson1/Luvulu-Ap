import { Injectable } from '@nestjs/common';

import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';

@Injectable()
export class FindOneWeeklyScheduleService {
  constructor(private repo: IWeeklyScheduleRepository) {}

  async findOnde(id: string): Promise<WeeklySchedules[]> {
    return await this.repo.findById(id);
  }
}
