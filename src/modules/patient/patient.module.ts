import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PrismaPatitientRepositoy } from './repository/implementations/prismaPatitientRepository';
import { IPatientRepository } from './repository/interface/IPatientRepository';
import { CreatePatientResolver } from './resolvers/create/create-patient.resolver';
import { CreatePatientService } from './usecases/create/create-patient.service';
import { FindOnePatientResolver } from './resolvers/findOne/findOne-patient.resolver';
import { ListAllPatientResolver } from './resolvers/listAll/listAll-patient.resolver';
import { RemovePatientResolver } from './resolvers/remove/remove-patient.resolver';
import { FindOnePatientService } from './usecases/findOne/findOne-patitient.service';
import { ListAllPatientService } from './usecases/listAll/listaAll-patitient.service';
import { RemovePatientService } from './usecases/remove/remove-patitient.service';
import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { AuthModule } from '../auth/auth.module';
import { ProfilePatientResolver } from './resolvers/perfil/perfil-patient.resolver';
import { ProfilePatientService } from './usecases/perfil/perfil-patitient.service';
import { SendMailService } from 'src/utils/services/emailService';
import { PatientCancelAppointmentResolver } from './resolvers/pacient-cancel-appointment/pacient-cancel-appointment.resolver';
import { PatientCancelAppointmentService } from './usecases/pacient-cancel-appointment/pacient-cancel-appointment.service';
import { PrismaAppointmentRepositoy } from '../appointments/repository/implementations/prismaAppointmentRepository';
import { IAppointmentRepository } from '../appointments/repository/interface/IAppointmentRepository';
import { PrismaNotificationsRepositoy } from '../notification/repository/implementations/prismaNotificationRepository';
import { INotificationRepository } from '../notification/repository/interface/INotificaionRepository';
import { PrismaQRCodeRepository } from '../qr-code/repository/implementations/prisma-QRCodeRepository';
import { IQRCodeRepository } from '../qr-code/repository/interface/IQRCodeRepository';
import { UpdatePasswordService } from './usecases/change-password/update-password.service';
import { UpdatePasswordResolver } from './resolvers/change-password/update-password.resolver';
import { UpdatePatientResolver } from './resolvers/update/update-patient.resolver';
import { UpdatePatientService } from './usecases/update/update-patient.service';

// import { UpdateAvatarPatientResolver } from './resolvers/updateAvatar/update-patient-avatar.resolver';
import { UpdatePatientAvatarService } from './usecases/updateAvatar/update-patient-avatar.service';
import { SuperBaseProviderRepository } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/superBase-provider';
import { MulterModule } from '@nestjs/platform-express';
import { IStorageProvider } from 'src/utils/shared/providers/storageProviders/interfaces/IstorageProvider';

@Module({
  imports: [PrismaModule, AuthModule, MulterModule],
  providers: [
    ListAllPatientService,
    FindOnePatientService,
    RemovePatientService,
    CreatePatientService,
    ProfilePatientService,
    SendMailService,
    PatientCancelAppointmentService,
    UpdatePasswordService,
    UpdatePatientService,
    UpdatePatientAvatarService,

    ListAllPatientResolver,
    ProfilePatientResolver,
    CreatePatientResolver,
    FindOnePatientResolver,
    RemovePatientResolver,
    PatientCancelAppointmentResolver,
    UpdatePasswordResolver,
    UpdatePatientResolver,
    // UpdateAvatarPatientResolver,

    {
      provide: IPatientRepository,
      useClass: PrismaPatitientRepositoy,
    },

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },

    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepositoy,
    },
    {
      provide: IAppointmentRepository,
      useClass: PrismaAppointmentRepositoy,
    },

    {
      provide: IQRCodeRepository,
      useClass: PrismaQRCodeRepository,
    },

    {
      provide: IStorageProvider,
      useClass: SuperBaseProviderRepository,
    },
  ],

  exports: [],
})
export class PatientModule {}
