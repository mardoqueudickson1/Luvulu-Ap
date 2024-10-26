import { Injectable } from '@nestjs/common';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { ClinicRatings } from '../../entities/ClinicRating.entity';

@Injectable()
export class ListAllClinicRatingService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async findAll(): Promise<ClinicRatings[]> {
    return await this.repo.findAll();
  }
}
