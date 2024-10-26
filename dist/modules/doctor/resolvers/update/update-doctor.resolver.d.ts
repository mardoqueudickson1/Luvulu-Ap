import { Doctors } from '../../entities/doctor.entity';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { UpdateDoctorService } from '../../usecases/update/update-doctor.service';
export declare class UpdateDoctorResolver {
    private readonly doctorService;
    constructor(doctorService: UpdateDoctorService);
    updateDoctorInfo(data: UpdateDoctorInput, user: any): Promise<Doctors>;
}
