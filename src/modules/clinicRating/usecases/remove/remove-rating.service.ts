import { Injectable, NotFoundException } from '@nestjs/common';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class RemoveClinicRatingService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const typeConsult = await this.repo.findById(id);

      if (!typeConsult) {
        throw new NotFoundException(messages.RatingNotFoun);
      }

      return await this.repo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
