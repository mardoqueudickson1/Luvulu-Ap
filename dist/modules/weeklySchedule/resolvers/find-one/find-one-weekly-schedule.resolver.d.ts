import { FindOneWeeklyScheduleService } from '../../usecases/find-one/find-one-weekly-schedule.service';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
export declare class FindOneWeeklyScheduleResolver {
    private readonly repo;
    constructor(repo: FindOneWeeklyScheduleService);
    findOneWeeklySchedule(id: string): Promise<WeeklySchedules[]>;
}
