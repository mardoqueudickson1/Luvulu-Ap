import { ServicesClinics } from '../../entities/services-clinic.entity';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class ListAllServicesClinicService {
    private readonly servicesClinicRepo;
    constructor(servicesClinicRepo: IServicesClinicRepository);
    listAll(): Promise<ServicesClinics[]>;
}
