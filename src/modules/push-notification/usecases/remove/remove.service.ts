import { Injectable } from '@nestjs/common';
import { IFCMRepository } from '../../repository/interface/IFCMRepository';
import { fcmTokenInput } from '../../dtos/fcmtoken.input';

@Injectable()
export class RemoveFCMService {
  constructor(private repo: IFCMRepository) {}

  async create(data: fcmTokenInput) {
    return await this.repo.create(data);
  }
}
