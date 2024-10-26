import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { FindAllWeeklyScheduleService } from '../../usecases/find-all/find-all-weekly-schedule.service';
export declare class FindAllWeeklyScheduleResolver {
    private readonly repo;
    constructor(repo: FindAllWeeklyScheduleService);
    findAllWeeklySchedule(): Promise<WeeklySchedules[]>;
}
