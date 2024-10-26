import { Injectable } from '@nestjs/common';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { UpdateLuvuluCard } from '../../dtos/update-luvulu-card';

@Injectable()
export class ChangeStatusLuvuluCardService {
  constructor(private readonly repo: ILuvuluCardRepository) {}

  async changeStatus(data: UpdateLuvuluCard): Promise<UpdateLuvuluCard> {
    const luvuluCard = await this.repo.update(data);
    return luvuluCard;
  }
}
