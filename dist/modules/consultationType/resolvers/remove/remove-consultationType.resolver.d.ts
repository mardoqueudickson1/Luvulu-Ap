import { RemoveConsultationTypeService } from '../../usecases/remove/remove-consultationType.service';
export declare class RemoveConsultationTypesResolver {
    private readonly typeConst;
    constructor(typeConst: RemoveConsultationTypeService);
    RemoveConsultationType(id: string): Promise<void>;
}
