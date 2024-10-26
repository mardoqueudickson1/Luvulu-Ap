import { Injectable } from '@nestjs/common';
import { ILuvuluCardRepository } from '../../repository/interface/ILuvuluCardRepository';
import { LuvuluCard } from '../../entities/luvulu-card.entity';
import { CardStatus } from '.prisma/client';

@Injectable()
export class CancelLuvuluCardRequestService {
  constructor(private readonly repo: ILuvuluCardRepository) {}

  async changeStatus(status: CardStatus, id: string): Promise<LuvuluCard> {
    const card = await this.repo.changeStatus(status, id);
    return card;
  }
}
