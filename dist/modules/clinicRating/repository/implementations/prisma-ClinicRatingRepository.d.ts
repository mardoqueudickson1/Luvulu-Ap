import { PrismaService } from 'nestjs-prisma';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { IClinicRatingRepository } from '../interface/IClinicRatingRepository';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { updateClinicRating } from '../../dtos/update-ClinicRating';
export declare class PrismaClinicRatingRepositoy implements IClinicRatingRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClinicRatingInput): Promise<ClinicRatings>;
    update(id: string, data: updateClinicRating): Promise<ClinicRatings>;
    findById(id: string): Promise<ClinicRatings>;
    findUserRatingForClinic(userId: string, clinicId: string): Promise<ClinicRatings>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<ClinicRatings[]>;
    findTopRatedClinic(): Promise<TopResponseAllClinic[]>;
    findOneClinicWithRate(id: string): Promise<TopResponseAllClinic>;
}
