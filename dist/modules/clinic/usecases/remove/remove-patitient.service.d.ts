import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class RemoveClinicService {
    private readonly clinicRepo;
    constructor(clinicRepo: IClinicRepository);
    remove(id: string): Promise<void>;
}
