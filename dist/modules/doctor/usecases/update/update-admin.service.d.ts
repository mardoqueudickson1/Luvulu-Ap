import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Doctors } from '../../entities/doctor.entity';
export declare class UpdateDoctorService {
    private readonly repo;
    constructor(repo: IDoctorRepository);
    update(id: string, data: UpdateDoctorInput): Promise<Doctors>;
}
