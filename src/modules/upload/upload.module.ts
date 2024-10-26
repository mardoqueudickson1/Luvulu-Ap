import { Module } from '@nestjs/common';

import { SuperBaseService } from './usecases/upload-avatar/upload-user-avatar.service';
import { UploadFileResolver } from './resolvers/upload-avatars/upload.resolver';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { IUploadRepository } from './repository/interface/IUploadRepository';
import { PrismaUploadRepositoy } from './repository/implementations/prismaUploadRepository';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { FindResolverResolver } from './resolvers/find/find.resolver';
import { FindFileService } from './usecases/find/find-user-avatar.service';

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  providers: [
    SuperBaseService,
    FindFileService,

    UploadFileResolver,
    FindResolverResolver,

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },

    {
      provide: IUploadRepository,
      useClass: PrismaUploadRepositoy,
    },
  ],

  exports: [],
})
export class UploadModule {}
