import { IServicesClinicRepository } from '../../repository/interface/IServicesClinicRepository';
export declare class RemoveServicesClinicService {
    private readonly serviceRepo;
    constructor(serviceRepo: IServicesClinicRepository);
    remove(id: string): Promise<void>;
}
