import { ConsultationTypes } from '../../entities/consultationType.entity';
import { FindOndeConsultationTypeService } from '../../usecases/find-one/find-onde-consultationType.service';
export declare class FindOneConsultationTypesResolver {
    private readonly typeConst;
    constructor(typeConst: FindOndeConsultationTypeService);
    findOneConsultationType(id: string): Promise<ConsultationTypes>;
}
