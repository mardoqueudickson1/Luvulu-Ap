import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
export declare class updateWeeklyScheduleService {
    private repo;
    constructor(repo: IWeeklyScheduleRepository);
    update(id: string, data: UpdateWeeklySchedule): Promise<WeeklySchedules>;
}
