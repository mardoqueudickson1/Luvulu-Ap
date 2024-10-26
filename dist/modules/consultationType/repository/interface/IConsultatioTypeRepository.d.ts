import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
export declare abstract class IConsultatioTypeRepository {
    abstract create(data: CreateConsultatinoTypeInput): Promise<ConsultationTypes>;
    abstract findById(id: string): Promise<ConsultationTypes>;
    abstract update(id: string, data: updateConsultatinoType): Promise<ConsultationTypes>;
    abstract findByName(name: string): Promise<ConsultationTypes>;
    abstract remove({ id }: {
        id: string;
    }): Promise<void>;
    abstract findAll(): Promise<ConsultationTypes[]>;
}
