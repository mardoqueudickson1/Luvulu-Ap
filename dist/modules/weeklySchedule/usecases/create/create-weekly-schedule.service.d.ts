import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
export declare class CreateWeeklyScheduleService {
    private weekRepo;
    constructor(weekRepo: IWeeklyScheduleRepository);
    create(data: WeeklyScheduleDTO): Promise<{
        message: string;
    }>;
}
