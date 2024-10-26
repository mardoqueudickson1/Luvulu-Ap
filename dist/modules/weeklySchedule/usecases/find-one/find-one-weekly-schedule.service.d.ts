import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
export declare class FindOneWeeklyScheduleService {
    private repo;
    constructor(repo: IWeeklyScheduleRepository);
    findOnde(id: string): Promise<WeeklySchedules[]>;
}
