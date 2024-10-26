import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './usecases/login/login.service';
import { LoginResolver } from './resolvers/login/login.resolver';
import { JwtStrategy } from './jwt-strategy/jwt.strategy.service';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { IUserRepository } from '..//user/repository/interface/IUserRepository';
import { PrismaFCMRepository } from '../push-notification/repository/implementations/priismaFCMRepository';
import { IFCMRepository } from '../push-notification/repository/interface/IFCMRepository';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],

  providers: [
    LoginService,
    LoginResolver,
    JwtStrategy,

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },
    {
      provide: IFCMRepository,
      useClass: PrismaFCMRepository,
    },
  ],

  exports: [],
})
export class AuthModule {}
