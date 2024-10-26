import { FavoriteType } from 'src/modules/favorites/dtos/favoriteType';
import { CreateRatingInput } from '../../dtos/create-rating.input';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
export declare abstract class IRatingRepository {
    abstract create(data: CreateRatingInput): Promise<Ratings>;
    abstract findById(id: string): Promise<Ratings>;
    abstract findUserRatingForDoctor(userId: string, doctorId: string): Promise<Ratings>;
    abstract update(id: string, data: updateRating): Promise<Ratings>;
    abstract remove({ id }: {
        id: string;
    }): Promise<void>;
    abstract findAll(): Promise<Ratings[]>;
    abstract findTopRatedDoctors(): Promise<TopResponseAllDoctor[]>;
    abstract findOneDoctorWithRate(data: string): Promise<TopResponseAllDoctor>;
    abstract findUser(id: string): Promise<FavoriteType>;
}
