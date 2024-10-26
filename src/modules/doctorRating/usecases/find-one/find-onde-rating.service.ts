import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from 'src/utils/shared/errorsMessages';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';

@Injectable()
export class FindOneRatingService {
  constructor(private readonly repo: IRatingRepository) {}

  async findOne(id: string): Promise<Ratings> {
    const rating = await this.repo.findById(id);

    if (!rating) {
      throw new NotFoundException(messages.RatingNotFoun);
    }

    return await this.repo.findById(id);
  }
}
