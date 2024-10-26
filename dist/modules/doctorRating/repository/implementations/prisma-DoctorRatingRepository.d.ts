import { PrismaService } from 'nestjs-prisma';
import { CreateRatingInput } from '../../dtos/create-rating.input';
import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../interface/IDoctorRatingRepository';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
import { FavoriteType } from 'src/modules/favorites/dtos/favoriteType';
export declare class PrismaRatingRepositoy implements IRatingRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRatingInput): Promise<Ratings>;
    update(id: string, data: updateRating): Promise<Ratings>;
    findById(id: string): Promise<Ratings>;
    findUserRatingForDoctor(userId: string, doctorId: string): Promise<Ratings>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<Ratings[]>;
    findTopRatedDoctors(): Promise<TopResponseAllDoctor[]>;
    findOneDoctorWithRate(data: string): Promise<TopResponseAllDoctor>;
    findUser(id: string): Promise<FavoriteType>;
}
