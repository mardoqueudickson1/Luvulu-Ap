import { PrismaService } from '../../../prisma/prisma.service';
import { IConsultatioTypeRepository } from '../interface/IConsultatioTypeRepository';
import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { ConsultationTypes } from '../../entities/consultationType.entity';
import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
export declare class ConsultationTypeRepositoy implements IConsultatioTypeRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateConsultatinoTypeInput): Promise<ConsultationTypes>;
    update(id: string, data: updateConsultatinoType): Promise<ConsultationTypes>;
    findById(id: string): Promise<ConsultationTypes>;
    findByName(name: string): Promise<ConsultationTypes>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<ConsultationTypes[]>;
}
