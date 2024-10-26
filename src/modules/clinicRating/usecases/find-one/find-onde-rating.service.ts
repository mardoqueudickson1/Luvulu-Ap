import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from 'src/utils/shared/errorsMessages';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';

@Injectable()
export class FindOneClinicRatingService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async findOne(id: string): Promise<ClinicRatings> {
    const rating = await this.repo.findById(id);

    if (!rating) {
      throw new NotFoundException(messages.RatingNotFoun);
    }

    return await this.repo.findById(id);
  }
}
