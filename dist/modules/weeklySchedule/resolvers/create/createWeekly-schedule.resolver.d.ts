import { CreateWeeklyScheduleService } from '../../usecases/create/create-weekly-schedule.service';
import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
export declare class CreateWeeklyScheduleResolver {
    private readonly WeeklySchedule;
    constructor(WeeklySchedule: CreateWeeklyScheduleService);
    CreateWeeklySchedule(user: any, weekInput: WeeklyScheduleDTO): Promise<{
        message: string;
    }>;
}
