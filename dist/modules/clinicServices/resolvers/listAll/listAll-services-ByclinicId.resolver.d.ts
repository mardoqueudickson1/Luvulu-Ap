import { ServicesClinics } from '../../entities/services-clinic.entity';
import { ListAllServicesBydClinicIdClinicService } from '../../usecases/listAllByclinicId/listaAll-services-ByclinicId.service';
export declare class ListAllServicesByClinicIdResolver {
    private readonly servicesClinicRepo;
    constructor(servicesClinicRepo: ListAllServicesBydClinicIdClinicService);
    findAllServicesByClinicId(clinicId: string): Promise<ServicesClinics[]>;
}
