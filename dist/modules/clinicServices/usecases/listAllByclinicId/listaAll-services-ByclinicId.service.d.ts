import { ServicesClinics } from '../../entities/services-clinic.entity';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class ListAllServicesBydClinicIdClinicService {
    private readonly servicesClinicRepo;
    constructor(servicesClinicRepo: IServicesClinicRepository);
    listAll(clinicId: string): Promise<ServicesClinics[]>;
}
