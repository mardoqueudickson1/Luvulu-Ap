import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { FindWeeklyScheduleByClinicIdService } from '../../usecases/find-by-clinicId/find-all-weekly-schedule.service';
export declare class FindAllWeeklyScheduleByClinicIdResolver {
    private readonly repo;
    constructor(repo: FindWeeklyScheduleByClinicIdService);
    findWeeklyScheduleByClinicId(clinicID: string, doctorID: string): Promise<WeeklySchedules[]>;
}
