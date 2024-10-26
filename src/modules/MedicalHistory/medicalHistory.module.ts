import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { FindMedicalHistoryByPatientIdService } from './usecases/getByPatientId/find-by-patientId.service';
import { FindMedicalHistoryByDoctorIdService } from './usecases/findByDoctorId/find-by-doctorId.service';
import { FindOneMedicalHistoryService } from './usecases/findOne/findOne-medicalHistory.service';
import { FindOneMedicalHistoryResolver } from './resolvers/findOne/findOne-notification.resolver';
import { FindMedicalHistoryByPatientIdResolver } from './resolvers/findByPatientId/find-by-patientId.resolver';
import { RemoveMedicalHistoryResolver } from './resolvers/remove/remove-medicalHistory.resolver';
import { RemoveHistoryMedicalService } from './usecases/remove/remove-historyMedical.service';
import { FindMedicalHistoryByDoctoryIdResolver } from './resolvers/findByDoctorId/find-by-doctorId.resolver';
import { PrismaMedicalHistoryRepositoy } from './repository/implementations/prismaMedicalHistoryRepository';
import { IMedicalHistoryRepository } from './repository/interface/IMedicalHistoryRepository';
import { FindMedicalHistoryByPatientIdPUBResolver } from './resolvers/findByPatientIdPUB/find-by-patientId.resolver';
import { FindMedicalHistoryByPatientIdPUBService } from './usecases/getByPatientIdPUB/find-by-patientId.service';

@Module({
  imports: [PrismaModule],
  providers: [
    FindMedicalHistoryByPatientIdService,
    FindMedicalHistoryByDoctorIdService,
    FindOneMedicalHistoryService,
    RemoveHistoryMedicalService,
    FindMedicalHistoryByPatientIdPUBService,

    FindOneMedicalHistoryResolver,
    FindMedicalHistoryByPatientIdResolver,
    FindMedicalHistoryByDoctoryIdResolver,
    RemoveMedicalHistoryResolver,
    FindMedicalHistoryByPatientIdPUBResolver,

    {
      provide: IMedicalHistoryRepository,
      useClass: PrismaMedicalHistoryRepositoy,
    },
  ],

  exports: [],
})
export class MedicalHistoryModule {}
