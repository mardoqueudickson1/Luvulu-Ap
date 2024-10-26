import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
export declare class RemoveWeeklyScheduleService {
    private repo;
    constructor(repo: IWeeklyScheduleRepository);
    remove(id: string): Promise<void>;
}
