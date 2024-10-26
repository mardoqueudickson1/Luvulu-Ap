import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { UpdateConsultationTypeService } from '../../usecases/update/update-consultationType.service';
export declare class UpdateConsultationTypesResolver {
    private readonly typeCons;
    constructor(typeCons: UpdateConsultationTypeService);
    UpdateConsultationType(data: updateConsultatinoType): Promise<ConsultationTypes>;
}
