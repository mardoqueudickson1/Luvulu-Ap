import { PrismaService } from '../../../prisma/prisma.service';
import { IServicesClinicRepository } from '../interface/IServicesClinicRepository';
import { CreateServiceInput } from '../../dtos/create-clinic-services.input';
import { ServicesClinics } from '../../entities/services-clinic.entity';
import { ClinicServicesType } from '../../dtos/clinic.types';
import { ResponseUser } from '../../dtos/clinic-services-output';
import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';
export declare class PrismaServicesClinicRepositoy implements IServicesClinicRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(input: CreateServiceInput): Promise<ServicesClinics>;
    findUser(id: string): Promise<ResponseUser>;
    findById(id: string): Promise<ServicesClinics>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(clinicId: string): Promise<ServicesClinics[]>;
    findByName(name: string): Promise<ServicesClinics>;
    findClinicById(id: string): Promise<ClinicServicesType>;
    update(id: string, input: UpdateClinicServicesInput): Promise<ServicesClinics>;
}
