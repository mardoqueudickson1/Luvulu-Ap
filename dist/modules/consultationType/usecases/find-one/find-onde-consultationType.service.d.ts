import { ConsultationTypes } from '../../entities/consultationType.entity';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
export declare class FindOndeConsultationTypeService {
    private readonly typeRepo;
    constructor(typeRepo: IConsultatioTypeRepository);
    findOne(id: string): Promise<ConsultationTypes>;
}
