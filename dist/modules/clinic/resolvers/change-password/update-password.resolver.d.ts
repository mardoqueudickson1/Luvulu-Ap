import { Clinics } from '../../entities/clinic';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { UpdateClinicPasswordService } from '../../usecases/change-password/update-password.service';
export declare class UpdateClinicPasswordResolver {
    private readonly passwordService;
    constructor(passwordService: UpdateClinicPasswordService);
    changeClinicPassword(data: ClinicUpdatePasswordInput, user: any): Promise<Clinics>;
}
