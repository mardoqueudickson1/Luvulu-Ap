import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PrismaMedicalReportRepositoy } from './repository/implementations/prismaMedicalReportRepositoy';
import { IMedicalReportRepository } from './repository/interface/IMediclaReportRepository';
import { PrismaAppointmentRepositoy } from '../appointments/repository/implementations/prismaAppointmentRepository';
import { IAppointmentRepository } from '../appointments/repository/interface/IAppointmentRepository';
import { CreateMedicalReportService } from './usecases/create/create-medical-report.service';
import { FindOneMedicalReportService } from './usecases/findOne/findOne-medical-report.service';
import { CreateMedicalReportResolver } from './resolvers/create/create-medical-report.resolver';
import { FindOneMedicalReportResolver } from './resolvers/findOne/findOne-medical-report.resolver';

@Module({
  imports: [PrismaModule, AuthModule, UserModule],
  providers: [
    CreateMedicalReportResolver,
    FindOneMedicalReportResolver,

    CreateMedicalReportService,
    FindOneMedicalReportService,
    {
      provide: IMedicalReportRepository,
      useClass: PrismaMedicalReportRepositoy,
    },

    {
      provide: IAppointmentRepository,
      useClass: PrismaAppointmentRepositoy,
    },
  ],

  exports: [],
})
export class MedicalReportModule {}
