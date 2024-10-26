import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { updateClinicRating } from '../../dtos/update-ClinicRating';
import { ClinicRatings } from '../../entities/ClinicRating.entity';

export abstract class IClinicRatingRepository {
  abstract create(data: CreateClinicRatingInput): Promise<ClinicRatings>;
  abstract findById(id: string): Promise<ClinicRatings>;
  abstract findUserRatingForClinic(
    userId: string,
    doctorId: string,
  ): Promise<ClinicRatings>;
  abstract update(id: string, data: updateClinicRating): Promise<ClinicRatings>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(): Promise<ClinicRatings[]>;
  abstract findTopRatedClinic(): Promise<TopResponseAllClinic[]>;
  abstract findOneClinicWithRate(id: string): Promise<TopResponseAllClinic>;
}
