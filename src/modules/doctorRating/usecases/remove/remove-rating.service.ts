import { Injectable, NotFoundException } from '@nestjs/common';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';

@Injectable()
export class RemoveRatingService {
  constructor(private readonly repo: IRatingRepository) {}

  async remove(id: string): Promise<void> {
    try {
      const typeConsult = await this.repo.findById(id);

      if (!typeConsult) {
        throw new NotFoundException('Rating não encontrada');
      }

      return await this.repo.remove({ id });
    } catch (error) {
      throw error;
    }
  }
}
