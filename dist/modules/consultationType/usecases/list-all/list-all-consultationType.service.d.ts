import { ConsultationTypes } from '../../entities/consultationType.entity';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
export declare class ListAllConsultationTypeService {
    private readonly typeRepo;
    constructor(typeRepo: IConsultatioTypeRepository);
    findAll(): Promise<ConsultationTypes[]>;
}
