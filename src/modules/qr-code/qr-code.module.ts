import { Module } from '@nestjs/common';
import { CreateQrCodeService } from './usecases/create/create-qr-code.service';
import { PrismaQRCodeRepository } from './repository/implementations/prisma-QRCodeRepository';
import { IQRCodeRepository } from './repository/interface/IQRCodeRepository';
import { CreateQrCodeResolver } from './resolver/create/create-qr-code.resolver';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { PatientModule } from '../patient/patient.module';
import { PrismaPatitientRepositoy } from '../patient/repository/implementations/prismaPatitientRepository';
import { IPatientRepository } from '../patient/repository/interface/IPatientRepository';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, PatientModule],

  providers: [
    CreateQrCodeResolver,

    CreateQrCodeService,

    {
      provide: IQRCodeRepository,
      useClass: PrismaQRCodeRepository,
    },

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },

    {
      provide: IPatientRepository,
      useClass: PrismaPatitientRepositoy,
    },
  ],

  exports: [
    CreateQrCodeService,
    {
      provide: IQRCodeRepository,
      useClass: PrismaQRCodeRepository,
    },
  ],
})
export class QrCodeModule {}
