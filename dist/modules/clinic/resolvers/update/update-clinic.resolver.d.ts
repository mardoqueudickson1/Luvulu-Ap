import { UpdateClinicService } from '../../usecases/update/update-clinic.service';
import { Clinics } from '../../entities/clinic';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';
export declare class UpdateClinicResolver {
    private readonly cllinicSerivce;
    constructor(cllinicSerivce: UpdateClinicService);
    updateClinic(data: UpdateClinicInput, user: any): Promise<Clinics>;
}
