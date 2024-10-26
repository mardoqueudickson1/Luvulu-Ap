import { UpdateClinicInput } from '../../dtos/update-clinic.input';
import { Clinics } from '../../entities/clinic';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class UpdateClinicService {
    private readonly repo;
    constructor(repo: IClinicRepository);
    update(data: UpdateClinicInput): Promise<Clinics>;
    getClinicID(clinicId: string): Promise<import("../../dtos/instition.types").institionType>;
}
