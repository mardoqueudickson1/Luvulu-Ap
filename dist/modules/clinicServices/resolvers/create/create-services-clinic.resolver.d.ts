import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { CreateServicesClinicService } from '../../usecases/create/create-services-clinic.service';
export declare class CreateServicesClinicResolver {
    private readonly servicesRepo;
    constructor(servicesRepo: CreateServicesClinicService);
    createServicesClinic(input: CreateServiceInput, user: any): Promise<ServicesClinics>;
}
