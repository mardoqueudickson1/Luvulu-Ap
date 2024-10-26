import { ServicesClinics } from '../../entities/services-clinic.entity';
import { ListAllServicesClinicService } from '../../usecases/listAll/listaAll-services-clinic.service';
export declare class ListAllServicesClinicResolver {
    private readonly servicesClinicRepo;
    constructor(servicesClinicRepo: ListAllServicesClinicService);
    findAllServicesClinic(): Promise<ServicesClinics[]>;
}
