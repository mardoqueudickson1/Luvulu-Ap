import { LoginInput } from '../../../auth/dtos/login.input';
import { LoginOutput } from '../../../auth/dtos/login.output';
import { Users } from '../../../user/entities/user';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { messages } from '../../../../utils/shared/errorsMessages';
import { IFCMRepository } from 'src/modules/push-notification/repository/interface/IFCMRepository';
import {
  fcmToken,
  fcmTokenUpdate,
} from 'src/modules/push-notification/dtos/fcmtoken.input';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepo: IUserRepository,
    private fcmRepo: IFCMRepository,
  ) {}

  async validateUser(data: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepo.findByEmail(data.email);
    if (user.avatar !== null) {
      const avatarUrl = await findSupabaseFileService
        .getPhotoUrl(user.avatar)
        .toString();
      user.avatar = avatarUrl;
    }

    if (!user) {
      throw new UnauthorizedException(messages.Unauthenticated);
    }
    const cmfToken: fcmToken = {
      userId: user.id,
      token: data.fcmToken,
    };

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(messages.Unauthenticated);
    }

    const { token, expiresIn } = await this.jwtToken(user);
    const { id, fcmToken } = await this.fcmRepo.findById(user.id);

    if (fcmToken.length > 0) {
      const fcmTokenUpdate: fcmTokenUpdate = {
        id: id[0],
        token: data.fcmToken,
        userId: user.id,
      };

      await this.fcmRepo.update(fcmTokenUpdate);
    } else if (fcmToken.length === 0) {
      await this.fcmRepo.create(cmfToken);
    }
    return {
      user: user,
      token,
      expiresIn,
    };
  }

  private async jwtToken(
    user: Users,
  ): Promise<{ token: string; expiresIn: number }> {
    const payload = { username: user.name, sub: user.id };
    const expiresIn = 60 * 60 * 24 * 7;
    const token = await this.jwtService.signAsync(payload, { expiresIn });

    return {
      token,
      expiresIn,
    };
  }
}
