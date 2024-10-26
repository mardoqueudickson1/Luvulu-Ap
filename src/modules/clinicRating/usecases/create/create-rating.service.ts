import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { messages } from 'src/utils/shared/errorsMessages';
import { ClinicRatings } from '../../entities/ClinicRating.entity';

@Injectable()
export class CreateClinicRatingService {
  constructor(private repo: IClinicRatingRepository) {}

  async create(data: CreateClinicRatingInput): Promise<ClinicRatings> {
    try {
      const existingRating = await this.repo.findUserRatingForClinic(
        data.userId,
        data.clinicId,
      );

      if (data.rate <= 0 || data.rate > 5) {
        throw new BadRequestException(messages.OverStars);
      }
      if (existingRating) {
        const updatedRating = await this.repo.update(existingRating.id, data);

        return updatedRating;
      } else {
        return await this.repo.create({
          userId: data.userId,
          clinicId: data.clinicId,
          rate: data.rate,
          comment: data.comment,
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
