import { UpdatePasswordService } from '../../usecases/changePassword/update-password.service';
import { Patients } from '../../entities/patient.entity';
import { changePasswordInput } from '../../dtos/change-password';
export declare class UpdatePasswordResolver {
    private readonly passwordService;
    constructor(passwordService: UpdatePasswordService);
    changePassword(data: changePasswordInput): Promise<Patients>;
}
