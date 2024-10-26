import { Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Qrcodes } from '../../entity/qrCode-entity';
import { CreateQrCodeService } from '../../usecases/create/create-qr-code.service';
import { QrcodeResponse } from '../../dtos/qrCode-rsponse';

@Resolver('qr-code')
export class CreateQrCodeResolver {
  constructor(private readonly repo: CreateQrCodeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Qrcodes)
  async CreateQrCode(@CurrentUser() user: QrcodeResponse) {
    return await this.repo.create(user);
  }
}
