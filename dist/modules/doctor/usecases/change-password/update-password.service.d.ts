import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { changeDoctorPasswordInput } from '../../dtos/change-password';
import { Doctors } from '../../entities/doctor.entity';
export declare class UpdateDoctorPasswordService {
    private readonly repo;
    constructor(repo: IDoctorRepository);
    update(data: changeDoctorPasswordInput): Promise<Doctors>;
    getDoctorId(userId: string): Promise<import("../../dtos/response-doctor").ResponseUser>;
}
