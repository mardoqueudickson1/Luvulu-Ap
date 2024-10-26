import { ResponseClinic } from '../../dtos/clinicReponse';
import { FindOneClinicService } from '../../usecases/findOne/findOne-clinic.service';
export declare class FindOneClinicResolver {
    private readonly clinicService;
    constructor(clinicService: FindOneClinicService);
    findOneClinicId(id: string): Promise<ResponseClinic>;
}
