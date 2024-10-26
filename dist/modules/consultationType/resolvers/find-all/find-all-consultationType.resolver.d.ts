import { ConsultationTypes } from '../../entities/consultationType.entity';
import { ListAllConsultationTypeService } from '../../usecases/list-all/list-all-consultationType.service';
export declare class FindAllConsultationTypesResolver {
    private readonly consulTypeService;
    constructor(consulTypeService: ListAllConsultationTypeService);
    findAllConsultationType(): Promise<ConsultationTypes[]>;
}
