import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
export declare class RemoveConsultationTypeService {
    private readonly typeRepo;
    constructor(typeRepo: IConsultatioTypeRepository);
    remove(id: string): Promise<void>;
}
