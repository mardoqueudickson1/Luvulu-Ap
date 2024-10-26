import { Injectable } from '@nestjs/common';
import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';

@Injectable()
export class UpdateRatingService {
  constructor(private readonly repo: IRatingRepository) {}

  async update(id: string, data: updateRating): Promise<Ratings> {
    const rating = await this.repo.update(id, data);
    return rating;
  }
}
