import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class UpdateServicesClinicService {
    private readonly repo;
    constructor(repo: IServicesClinicRepository);
    update(id: string, data: UpdateClinicServicesInput): Promise<ServicesClinics>;
}
