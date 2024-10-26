import { Patients } from '../../entities/patient.entity';
import { changePasswordInput } from '../../dtos/change-password';
import { UpdatePasswordService } from '../../usecases/change-password/update-password.service';
export declare class UpdatePasswordResolver {
    private readonly passwordService;
    constructor(passwordService: UpdatePasswordService);
    changePatientPassword(data: changePasswordInput, user: any): Promise<Patients>;
}
