import { CreateClinicInput } from '../../dtos/create-clinic.input';
import { Clinics } from '../../entities/clinic';
import { CreateClinicService } from '../../usecases/create/create-clinic.service';
export declare class CreateClinicResolver {
    private readonly clinicService;
    constructor(clinicService: CreateClinicService);
    createClinic(createClinicDTO: CreateClinicInput): Promise<Clinics>;
}
