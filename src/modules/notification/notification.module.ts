import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { AuthModule } from '../auth/auth.module';

import { FindOneNotificationService } from './usecases/findOne/findOne-notification.service';
import { RemoveNotificationService } from './usecases/remove/remove-notification.service';
import { INotificationRepository } from './repository/interface/INotificaionRepository';
import { PrismaNotificationsRepositoy } from './repository/implementations/prismaNotificationRepository';
import { FindOneNotificationResolver } from './resolvers/findOne/findOne-notification.resolver';
import { RemoveNotificationResolver } from './resolvers/remove/remove-notification.resolver';
import { UpdateNotificationService } from './usecases/update/update-notification.service';
import { UpdateNotificationResolver } from './resolvers/update/update-notification.resolver';
import { ListAllNotificationPatientResolver } from './resolvers/listAllByPatientId/listAll-notification-patientId.resolver';
import { ListAllNotificationByPatientService } from './usecases/getAllNotificationBypatientId/getAll-notification-patientId.service';
import { ListAllNotificationClinicIdResolver } from './resolvers/listAllByClinicId/listAll-notification-clinicId.resolver';
import { ListAllNotificationByClinicIdService } from './usecases/getAllNotificationByClinicId/getAll-notification-clinicId.service';
import { ListAllNotificationDoctorIdResolver } from './resolvers/listAllByDoctorId/listAll-notification-doctorId.resolver';
import { ListAllNotificationByDoctorIdService } from './usecases/getAllNotificationBydoctorId/getAll-notification-doctorId.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    ListAllNotificationByPatientService,
    FindOneNotificationService,
    RemoveNotificationService,
    UpdateNotificationService,
    ListAllNotificationByClinicIdService,
    ListAllNotificationByDoctorIdService,

    ListAllNotificationPatientResolver,
    FindOneNotificationResolver,
    RemoveNotificationResolver,
    FindOneNotificationResolver,
    UpdateNotificationResolver,
    ListAllNotificationClinicIdResolver,
    ListAllNotificationDoctorIdResolver,

    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepositoy,
    },

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },
  ],

  exports: [],
})
export class NotificationModule {}
