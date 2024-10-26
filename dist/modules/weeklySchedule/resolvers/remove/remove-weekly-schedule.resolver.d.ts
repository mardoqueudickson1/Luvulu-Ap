import { RemoveWeeklyScheduleService } from '../../usecases/remove/remove-weekly-schedule.service';
export declare class RemoveWeeklyScheduleResolver {
    private readonly repo;
    constructor(repo: RemoveWeeklyScheduleService);
    removeWorkCalendar(id: string): Promise<void>;
}
