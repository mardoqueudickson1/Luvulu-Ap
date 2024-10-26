import { Injectable } from '@nestjs/common';
import { updateClinicRating } from '../../dtos/update-ClinicRating';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';

@Injectable()
export class UpdateClinicRatingService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async update(id: string, data: updateClinicRating): Promise<ClinicRatings> {
    const rating = await this.repo.update(id, data);
    return rating;
  }
}
