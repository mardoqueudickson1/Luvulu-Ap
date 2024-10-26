import { Injectable } from '@nestjs/common';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';

@Injectable()
export class FindWeeklyScheduleByClinicIdService {
  constructor(private repo: IWeeklyScheduleRepository) {}

  async findAll(id: string): Promise<WeeklySchedules[]> {
    return await this.repo.findByClinicId(id);
  }
}
