import { IClinicRepository } from '../../../clinic/repository/interface/IClinicRepository';
import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class CreateServicesClinicService {
    private readonly servicesClinicRepo;
    private clinicRepo;
    constructor(servicesClinicRepo: IServicesClinicRepository, clinicRepo: IClinicRepository);
    create(input: CreateServiceInput): Promise<import("../../entities/services-clinic.entity").ServicesClinics>;
}
