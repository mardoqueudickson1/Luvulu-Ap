import { PrismaService } from 'nestjs-prisma';
import { ISpecialityRepository } from '../interface/IServicesClinicRepository';
import { ResponseUser } from 'src/modules/patient/dtos/reponsePatientOutput';
import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { SpecialityResponse } from '../../dtos/specialiaty-output';
import { Specialities } from '../../entities/specialiaty.entity';
export declare class PrismaServicesClinicRepositoy implements ISpecialityRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByName(name: string): Promise<Specialities>;
    create(data: CreateSpecialityInput): Promise<Specialities>;
    findUser(id: string): Promise<ResponseUser>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<SpecialityResponse[]>;
}
