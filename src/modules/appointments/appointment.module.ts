import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { IAppointmentRepository } from './repository/interface/IAppointmentRepository';
import { PrismaAppointmentRepositoy } from './repository/implementations/prismaAppointmentRepository';
import { CreateAppointmentResolver } from './resolvers/create/create-appointment.resolver';
import { FindOneAppointmentResolver } from './resolvers/findOne/findOne-appointment.resolver';
import { RemoveAppointmentResolver } from './resolvers/remove/remove-appointment.resolver';
import { ListAllAppointmentsResolver } from './resolvers/listAll/listAll-appointment.resolver';
import { UpdateAppointmentResolver } from './resolvers/update/update-appointment.resolver';
import { CreateAppointmentService } from './usecases/create/create-appointment.service';
import { ListAllAppointmentService } from './usecases/listAll/listaAll-appointment.service';
import { FindOneAppointmentService } from './usecases/findOne/findOne-appointment.service';
import { RemoveAppointmentService } from './usecases/remove/remove-appointment.service';
import { UpdateAppointmentService } from './usecases/update/update-appointment.service';
import { PrismaWeeklyScheduleRepository } from '../weeklySchedule/repository/implementations/prisma-WorkCalendarRepository';
import { IWeeklyScheduleRepository } from '../weeklySchedule/repository/interface/IWeeklyScheduleRepository';
import { PrismaNotificationsRepositoy } from '../notification/repository/implementations/prismaNotificationRepository';
import { INotificationRepository } from '../notification/repository/interface/INotificaionRepository';
import { IMedicalHistoryRepository } from '../MedicalHistory/repository/interface/IMedicalHistoryRepository';
import { PrismaMedicalHistoryRepositoy } from '../MedicalHistory/repository/implementations/prismaMedicalHistoryRepository';
import { FindAppointmentByDateService } from './usecases/findByDate/finByDate-appointment.service';
import { FindAppointmentByDateResolver } from './resolvers/findByDate/findByDate-appointment.resolver';
import { FindAppointmentByPatientIdService } from './usecases/findByPatientId/find-by-patientId-appointment.service';
import { FindAppointmentByPatientIdResolver } from './resolvers/findByPatientId/find-by-patientId-appointment.resolver';
import { PrismaClinicRepositoy } from '../clinic/repository/implementations/prismaClinicRepository';
import { IClinicRepository } from '../clinic/repository/interface/IClinicRepository';
import { FindAppointmentByClinicIdResolver } from './resolvers/findByClinicId/find-by-clinicId-appointment.resolver';
import { FindAppointmentByDoctorIdResolver } from './resolvers/findByDoctorId/find-by-DoctorId-appointment.resolver';
import { FindAppointmentByclinicIdService } from './usecases/findByClinicId/find-by-clinicId-appointment.service';
import { FindAppointmentBydoctorIdService } from './usecases/findByDoctortId/find-by-doctorId-appointment.service';
import { PrismaPatitientRepositoy } from '../patient/repository/implementations/prismaPatitientRepository';
import { IPatientRepository } from '../patient/repository/interface/IPatientRepository';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateAppointmentService,
    ListAllAppointmentService,
    FindOneAppointmentService,
    RemoveAppointmentService,
    UpdateAppointmentService,
    FindAppointmentByDateService,
    FindAppointmentByPatientIdService,
    FindAppointmentByclinicIdService,
    FindAppointmentBydoctorIdService,

    CreateAppointmentResolver,
    FindOneAppointmentResolver,
    RemoveAppointmentResolver,
    ListAllAppointmentsResolver,
    UpdateAppointmentResolver,
    FindAppointmentByDateResolver,
    FindAppointmentByPatientIdResolver,
    FindAppointmentByDoctorIdResolver,
    FindAppointmentByClinicIdResolver,

    {
      provide: IAppointmentRepository,
      useClass: PrismaAppointmentRepositoy,
    },
    {
      provide: IWeeklyScheduleRepository,
      useClass: PrismaWeeklyScheduleRepository,
    },
    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepositoy,
    },

    {
      provide: IMedicalHistoryRepository,
      useClass: PrismaMedicalHistoryRepositoy,
    },
    {
      provide: IClinicRepository,
      useClass: PrismaClinicRepositoy,
    },
    {
      provide: IPatientRepository,
      useClass: PrismaPatitientRepositoy,
    },
  ],

  exports: [],
})
export class AppointmentModule {}
