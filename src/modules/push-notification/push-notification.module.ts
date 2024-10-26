import { Module } from '@nestjs/common';
import { SendNotificationService } from './usecases/send/send.service';
import { CreateFMCResolver } from './resolvers/create/create.resolver';
import { CreateFCMService } from './usecases/create/create.service';
import { RemoveFCMService } from './usecases/remove/remove.service';
import { PrismaFCMRepository } from './repository/implementations/priismaFCMRepository';
import { IFCMRepository } from './repository/interface/IFCMRepository';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { IUserRepository } from '../user/repository/interface/IUserRepository';

@Module({
  imports: [PrismaModule, AuthModule],

  providers: [
    SendNotificationService,
    CreateFCMService,
    RemoveFCMService,
    CreateFMCResolver,
    CreateFMCResolver,
    {
      provide: IFCMRepository,
      useClass: PrismaFCMRepository,
    },
    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },
  ],

  exports: [],
})
export class PushNotificationModule {}
