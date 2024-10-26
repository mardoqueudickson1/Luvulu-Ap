import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';
export declare class FindAppointmentByClinicIdService {
    private readonly institionRepo;
    constructor(institionRepo: IClinicRepository);
    execute(clinicId: string): Promise<ResponseAllAppointClinic[]>;
}
