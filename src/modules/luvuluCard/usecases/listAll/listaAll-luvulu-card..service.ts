import { Injectable } from '@nestjs/common';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';

@Injectable()
export class ListAllLuvuluCardService {
  constructor(private readonly repo: ILuvuluCardRepository) {}

  async listAll(id: string): Promise<LuvuluCardResponse[]> {
    const { Institution } = await this.repo.findUser(id);

    const luvuluCard = await this.repo.findAll(Institution.id);
    return luvuluCard;
  }
}
