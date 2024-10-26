import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PrismaUserRepositoy } from '../user/repository/implementations/prismaUserRepository';
import { IUserRepository } from '../user/repository/interface/IUserRepository';
import { ListAlldoctorResolver } from './resolvers/listAll/listAll-doctor.resolver';
import { RemoveDoctorResolver } from './resolvers/remove/remove-doctor.resolver';
import { CreateDoctorService } from './usecases/create/create-doctor.service';
import { FindOneDoctorService } from './usecases/findOne/findOne-doctor.service';
import { ListAllDoctorService } from './usecases/listAll/listaAll-doctor.service';
import { RemoveDoctorService } from './usecases/remove/remove-doctor.service';
import { IDoctorRepository } from './repository/interface/IDoctorRepository';
import { PrismaDoctorRepositoy } from './repository/implementations/prismaDoctorRepository';
import { CreateDoctorResolver } from './resolvers/create/create-doctor.resolver';
import { FindOneDoctorResolver } from './resolvers/findOne/findOne-doctor.resolver';
import { ProfileDoctorService } from './usecases/perfil/perfil-doctor.service';
import { UserModule } from '../user/user.module';
import { ProfiledoctorResolver } from './resolvers/perfil/perfil-doctor.resolver';
import { UpdateDoctorResolver } from './resolvers/update/update-doctor.resolver';
import { GetScheduleDoctorByIdService } from './usecases/getSchedule/get-schedule.service';
import { GetScheduuleDoctorByIdResolver } from './resolvers/getSchedule/get-schedule.resolver';

import { ListAllDoctorByclinicIDService } from './usecases/list-All-by-clinicID/list-All-by-clinicID.service';
import { ListAllDoctorByclinicIDResolver } from './resolvers/list-All-by-clinicID/list-all-by-ClinicID.resolver';

import { AssociateDoctorResolver } from './resolvers/associate-doctor/associate-doctor.resolver';
import { AssociateDoctorService } from './usecases/associate-doctor/associate-doctor.service';
import { PrismaClinicRepositoy } from '../clinic/repository/implementations/prismaClinicRepository';
import { IClinicRepository } from '../clinic/repository/interface/IClinicRepository';
import { ChangeAppointmantStatusResolver } from './resolvers/changeAppointmantStatus/change-appointmant-status.resolver';
import { ChangeAppointmentStatusService } from './usecases/change-appointment-status/change-appointment-status.service';
import { PrismaNotificationsRepositoy } from '../notification/repository/implementations/prismaNotificationRepository';
import { INotificationRepository } from '../notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from '../appointments/repository/interface/IAppointmentRepository';
import { PrismaAppointmentRepositoy } from '../appointments/repository/implementations/prismaAppointmentRepository';
import { listClinicOfDoctorService } from './usecases/findClinicOfDoctor/list-all-clinic-OfDoctor.service';
import { listClinicOfDoctorResolver } from './resolvers/findClinicOfDoctor/list-all-clinic-OfDoctor.resolver';
import { SendMailService } from 'src/utils/services/emailService';
import { FilterDoctorResolver } from './resolvers/filter/filter-doctor.resolver';
import { FilterDoctorService } from './usecases/filter/filter-doctor.service';
import { SearchDoctorService } from './usecases/searchDoctor/search-doctor.service';
import { SearchDoctorResolver } from './resolvers/searchDoctor/search-doctor.resolver';
import { getDoctorAppointmentsPatientsResolver } from './resolvers/DoctoPatientsAppoint/doctor-pacient-appoint.resolver';
import { getDoctorAppointmentsPatientsService } from './usecases/DoctoPatientsAppoint/doctor-pacient-appoint.service';
import { DesasociateDoctorResolver } from './resolvers/desasociate-doctor/desasociate-doctor.resolver';
import { DesasociateDoctorService } from './usecases/desasociate-doctor/desasociate-doctor.service';
import { UpdateDoctorPasswordResolver } from './resolvers/change-password/update-password.resolver';
import { UpdateDoctorPasswordService } from './usecases/change-password/update-password.service';
import { UpdateDoctorService } from './usecases/update/update-doctor.service';

@Module({
  imports: [PrismaModule, AuthModule, UserModule],
  providers: [
    ListAllDoctorService,
    FindOneDoctorService,
    RemoveDoctorService,
    CreateDoctorService,
    ProfileDoctorService,
    UpdateDoctorService,
    GetScheduleDoctorByIdService,
    ListAllDoctorByclinicIDService,
    AssociateDoctorService,
    ChangeAppointmentStatusService,
    listClinicOfDoctorService,
    SendMailService,
    FilterDoctorService,
    SearchDoctorService,
    getDoctorAppointmentsPatientsService,
    DesasociateDoctorService,
    UpdateDoctorPasswordService,

    CreateDoctorResolver,
    FindOneDoctorResolver,
    RemoveDoctorResolver,
    ListAlldoctorResolver,
    ProfiledoctorResolver,
    UpdateDoctorResolver,
    AssociateDoctorResolver,
    ChangeAppointmantStatusResolver,
    GetScheduuleDoctorByIdResolver,
    ListAllDoctorByclinicIDResolver,
    listClinicOfDoctorResolver,
    FilterDoctorResolver,
    SearchDoctorResolver,
    getDoctorAppointmentsPatientsResolver,
    DesasociateDoctorResolver,
    UpdateDoctorPasswordResolver,

    {
      provide: IDoctorRepository,
      useClass: PrismaDoctorRepositoy,
    },

    {
      provide: IUserRepository,
      useClass: PrismaUserRepositoy,
    },

    {
      provide: IClinicRepository,
      useClass: PrismaClinicRepositoy,
    },
    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepositoy,
    },
    {
      provide: IAppointmentRepository,
      useClass: PrismaAppointmentRepositoy,
    },
  ],

  exports: [],
})
export class DoctorModule {}
