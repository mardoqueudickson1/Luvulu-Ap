import { RemoveServicesClinicService } from '../../usecases/remove/remove-services-clinic.service';
export declare class RemoveServicesClinicResolver {
    private readonly servicesClinicRepo;
    constructor(servicesClinicRepo: RemoveServicesClinicService);
    removeServicesClinic(id: string): Promise<void>;
}
