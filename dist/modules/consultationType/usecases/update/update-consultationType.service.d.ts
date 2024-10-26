import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { ConsultationTypes } from '../../entities/consultationType.entity';
export declare class UpdateConsultationTypeService {
    private readonly repo;
    constructor(repo: IConsultatioTypeRepository);
    update(id: string, data: updateConsultatinoType): Promise<ConsultationTypes>;
}
