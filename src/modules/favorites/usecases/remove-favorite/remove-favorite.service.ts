import { Injectable } from '@nestjs/common';
import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
import { RemoveFavorite } from '../../dtos/create-favorite-input';

@Injectable()
export class RemoveFavoriteService {
  constructor(private repo: IFavoriteRepository) {}

  async remove(data: RemoveFavorite): Promise<{ message: string }> {
    const { pacient } = await this.repo.findUser(data.pacientId);
    data.pacientId = pacient.id;

    return await this.repo.remove(data);
  }
}
