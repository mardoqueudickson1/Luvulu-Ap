import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
export declare class FindWeeklyScheduleByClinicIdService {
    private repo;
    constructor(repo: IWeeklyScheduleRepository);
    findAll(id: string, doctorId: string): Promise<WeeklySchedules[]>;
}
