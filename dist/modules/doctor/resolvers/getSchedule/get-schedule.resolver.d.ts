import { GetScheduleDoctorByIdService } from '../../usecases/getSchedule/get-schedule.service';
export declare class GetScheduuleDoctorByIdResolver {
    private readonly doctorService;
    constructor(doctorService: GetScheduleDoctorByIdService);
    getScheduleById(id: string): Promise<any>;
}
