import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
export declare class CreateConsulatationTypeService {
    private consType;
    constructor(consType: IConsultatioTypeRepository);
    create(data: CreateConsultatinoTypeInput): Promise<import("../../entities/consultationType.entity").ConsultationTypes>;
}
