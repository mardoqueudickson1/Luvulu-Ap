import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { CreateConsulatationTypeService } from '../../usecases/create/create-consultatioType.service';
export declare class CreateConsultationTypeResolver {
    private readonly typeRepo;
    constructor(typeRepo: CreateConsulatationTypeService);
    createConsulatationType(input: CreateConsultatinoTypeInput): Promise<ConsultationTypes>;
}
