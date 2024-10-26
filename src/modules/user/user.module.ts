import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { IUserRepository } from './repository/interface/IUserRepository';
import { PrismaUserRepositoy } from './repository/implementations/prismaUserRepository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },
  ],

  exports: [
    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },
  ],
})
export class UserModule {}
