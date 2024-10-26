import { Injectable } from '@nestjs/common';
import { IFCMRepository } from '../../repository/interface/IFCMRepository';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';
import { IUserRepository } from 'src/modules/user/repository/interface/IUserRepository';

@Injectable()
export class CreateFCMService {
  constructor(
    private repo: IFCMRepository,
    private userRepo: IUserRepository,
  ) {}

  async create(data: fcmTokenInput) {
    return await this.repo.create(data);
  }
}
