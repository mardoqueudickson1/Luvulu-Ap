import { Injectable } from '@nestjs/common';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';

@Injectable()
export class ListAllRatingService {
  constructor(private readonly repo: IRatingRepository) {}

  async findAll(): Promise<Ratings[]> {
    return await this.repo.findAll();
  }
}
