import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateRatingInput } from '../../dtos/create-rating.input';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { Ratings } from '../../entities/rating.entity';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class CreateRatingService {
  constructor(private repo: IRatingRepository) {}

  async create(data: CreateRatingInput): Promise<Ratings> {
    try {
      const existingRating = await this.repo.findUserRatingForDoctor(
        data.userId,
        data.doctorId,
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
          doctorId: data.doctorId,
          rate: data.rate,
          comment: data.comment,
          appoitmentID: data.appoitmentID,
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
