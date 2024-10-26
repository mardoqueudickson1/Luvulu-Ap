import { Injectable } from '@nestjs/common';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';

@Injectable()
export class ListOneLuvuluCardService {
  constructor(private readonly repo: ILuvuluCardRepository) {}

  async listOne(id: string): Promise<LuvuluCardResponse> {
    const luvuluCard = await this.repo.findAOne(id);
    return luvuluCard;
  }
}
