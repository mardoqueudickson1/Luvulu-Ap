import { Injectable } from '@nestjs/common';
import { LuvuluCardResponse } from '../../dtos/luvulu-card-response';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';

@Injectable()
export class ListOneLuvuluCardService {
  constructor(private readonly repo: ILuvuluCardRepository) {}

  async listOneByPacientId(id: string): Promise<LuvuluCardResponse> {
    const { pacient } = await this.repo.findUser(id);
    return await this.repo.findByPaceintId(pacient.id);
  }
}
