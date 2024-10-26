import { changeDoctorPasswordInput } from '../../dtos/change-password';
import { UpdateDoctorPasswordService } from '../../usecases/change-password/update-password.service';
import { Doctors } from '../../entities/doctor.entity';
export declare class UpdateDoctorPasswordResolver {
    private readonly passwordService;
    constructor(passwordService: UpdateDoctorPasswordService);
    changeDoctorPassword(data: changeDoctorPasswordInput, user: any): Promise<Doctors>;
}
