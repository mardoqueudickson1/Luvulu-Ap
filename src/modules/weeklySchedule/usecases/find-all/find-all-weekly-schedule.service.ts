import { Injectable } from '@nestjs/common';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';

@Injectable()
export class FindAllWeeklyScheduleService {
  constructor(private repo: IWeeklyScheduleRepository) {}

  async findAll(): Promise<WeeklySchedules[]> {
    return await this.repo.findAll();
  }
}
