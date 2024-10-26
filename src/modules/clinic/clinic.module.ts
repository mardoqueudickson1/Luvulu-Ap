import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';

import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { AuthModule } from '..//auth/auth.module';

import { IClinicRepository } from './repository/interface/IClinicRepository';
import { PrismaClinicRepositoy } from './repository/implementations/prismaClinicRepository';
import { CreateClinicService } from './usecases/create/create-clinic.service';
import { ListAllClinicService } from './usecases/listAll/listaAll-clinic.service';
import { FindOneClinicService } from './usecases/findOne/findOne-clinic.service';
import { RemoveClinicService } from './usecases/remove/remove-patitient.service';
import { CreateClinicResolver } from './resolvers/create/create-clinic.resolver';
import { RemoveClinicResolver } from './resolvers/remove/remove-clinic.resolver';
import { FindOneClinicResolver } from './resolvers/findOne/findOne-clinic.resolver';
import { ListAllClinicResolver } from './resolvers/listAll/listAll-clinic.resolver';
import { ProfileClinicResolver } from './resolvers/perfil/perfil-clinic.resolver';
import { ProfileClinicService } from './usecases/profile/perfil-clinic.service';
import { ClinicChangeAppointmentStatusService } from './usecases/change-appointment-status/change-appointment-status.service';
import { ClinicChangeAppointmantStatusResolver } from './resolvers/changeAppointmantStatus/change-appointmant-status.resolver';
import { PrismaAppointmentRepositoy } from '../appointments/repository/implementations/prismaAppointmentRepository';
import { IAppointmentRepository } from '../appointments/repository/interface/IAppointmentRepository';
import { PrismaNotificationsRepositoy } from '../notification/repository/implementations/prismaNotificationRepository';
import { INotificationRepository } from '../notification/repository/interface/INotificaionRepository';
import { FindAppointmentByClinicIdService } from './usecases/findByClinicId/find-by-clinicId-appointment.service';
import { FindAppointmentByClinicIdResolver } from './resolvers/findByPatientId/find-by-clinicId-appointment.resolver';
import { PrismaDoctorRepositoy } from '../doctor/repository/implementations/prismaDoctorRepository';
import { IDoctorRepository } from '../doctor/repository/interface/IDoctorRepository';
import { SendMailService } from 'src/utils/services/emailService';
import { FindClinicNearByResolver } from './resolvers/findClinicNearBy/find-clinic-nearBy.resolver';
import { findClinicNearByService } from './usecases/findClinicNearBy/find-clinic-nearBy.service';
import { FilterClinicResolver } from './resolvers/filter/filter-clinic.resolver';
import { FilterClinicService } from './usecases/filter/filter-clinic.service';
import { SearchClinicService } from './usecases/searchClinic/search-clinic.service';
import { FindSearchClinicResolver } from './resolvers/searchClinic/search-clinic.resolver';
import { UpdateClinicPasswordResolver } from './resolvers/change-password/update-password.resolver';
import { UpdateClinicResolver } from './resolvers/update/update-clinic.resolver';
import { UpdateClinicPasswordService } from './usecases/change-password/update-password.service';
import { UpdateClinicService } from './usecases/update/update-clinic.service';
import { IPatientRepository } from '../patient/repository/interface/IPatientRepository';
import { PrismaPatitientRepositoy } from '../patient/repository/implementations/prismaPatitientRepository';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    CreateClinicService,
    ListAllClinicService,
    FindOneClinicService,
    RemoveClinicService,
    ProfileClinicService,
    ClinicChangeAppointmentStatusService,
    FindAppointmentByClinicIdService,
    SendMailService,
    findClinicNearByService,
    FilterClinicService,
    SearchClinicService,
    UpdateClinicService,
    UpdateClinicPasswordService,

    CreateClinicResolver,
    ListAllClinicResolver,
    FindOneClinicResolver,
    RemoveClinicResolver,
    ProfileClinicResolver,
    ClinicChangeAppointmantStatusResolver,
    FindAppointmentByClinicIdResolver,
    FindClinicNearByResolver,
    FilterClinicResolver,
    FindSearchClinicResolver,
    UpdateClinicResolver,
    UpdateClinicPasswordResolver,

    {
      provide: IClinicRepository,
      useClass: PrismaClinicRepositoy,
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
      provide: IDoctorRepository,
      useClass: PrismaDoctorRepositoy,
    },
    {
      provide: IPatientRepository,
      useClass: PrismaPatitientRepositoy,
    },
  ],

  exports: [],
})
export class ClinicModule {}
