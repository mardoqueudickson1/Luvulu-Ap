import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { UpdateServicesClinicService } from '../../usecases/update/update-clinicService.service';
export declare class UpdateClinicServicesResolver {
    private readonly servicesClinic;
    constructor(servicesClinic: UpdateServicesClinicService);
    updateServicesClinic(clinicId: string, data: UpdateClinicServicesInput): Promise<ServicesClinics>;
}
