import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
export declare class FindAllWeeklyScheduleService {
    private repo;
    constructor(repo: IWeeklyScheduleRepository);
    findAll(): Promise<WeeklySchedules[]>;
}
