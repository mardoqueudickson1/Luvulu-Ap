import { Injectable } from '@nestjs/common';
import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
import { CreateFavoriteInput } from '../../dtos/create-favorite-input';
import { Favorite } from '../../entity/favorite.entity';
import { IDoctorRepository } from 'src/modules/doctor/repository/interface/IDoctorRepository';

@Injectable()
export class CreateFavoriteService {
  constructor(
    private repo: IFavoriteRepository,
    private userRepo: IDoctorRepository,
  ) {}

  async create(data: CreateFavoriteInput): Promise<Favorite> {
    const { pacient } = await this.repo.findUser(data.pacientId);
    data.pacientId = pacient.id;
    return await this.repo.create(data);
  }
}
