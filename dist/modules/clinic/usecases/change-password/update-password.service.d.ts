import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { Clinics } from '../../entities/clinic';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class UpdateClinicPasswordService {
    private readonly repo;
    constructor(repo: IClinicRepository);
    update(data: ClinicUpdatePasswordInput): Promise<Clinics>;
    getClinicID(clinicId: string): Promise<import("../../dtos/instition.types").institionType>;
}
