import { Injectable } from '@nestjs/common';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';

@Injectable()
export class updateWeeklyScheduleService {
  constructor(private repo: IWeeklyScheduleRepository) {}
  async update(
    id: string,
    data: UpdateWeeklySchedule,
  ): Promise<WeeklySchedules> {
    return await this.repo.update(id, data);
  }
}
