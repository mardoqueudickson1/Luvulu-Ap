import { updateWeeklyScheduleService } from '../../usecases/update/update-weekly-schedule..service';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
export declare class UpdateWeeklyScheduleesolver {
    private readonly repo;
    constructor(repo: updateWeeklyScheduleService);
    updateWorkCalenar(weekInput: UpdateWeeklySchedule): Promise<WeeklySchedules>;
}
