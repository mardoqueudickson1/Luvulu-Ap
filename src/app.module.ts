import { Logger, Module } from '@nestjs/common';
import { PatientModule } from './modules/patient/patient.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { AuthModule } from './modules/auth/auth.module';
import { ClinicModule } from './modules/clinic/clinic.module';
import { ServicesClinicModule } from './modules/clinicServices/servicesClinic.module';
import { DoctorModule } from './modules/doctor/doctor.module';
import { ConsultationTypeModule } from './modules/consultationType/consultationType.module';
import { WeeklyScheduleModule } from './modules/weeklySchedule/Weekly-schedule.module';
import { AppointmentModule } from './modules/appointments/appointment.module';
import { NotificationModule } from './modules/notification/notification.module';
import { MedicalHistoryModule } from './modules/MedicalHistory/medicalHistory.module';
import { ClinicRatingModule } from './modules/clinicRating/clinic-rating.module';
import { DoctorRatingModule } from './modules/doctorRating/doctor-rating.module';
import { QrCodeModule } from './modules/qr-code/qr-code.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';
import { MedicalReportModule } from './modules/MedicalReport/medicalReportr.module';
import { specialiatyModule } from './modules/doctorSpeciality/speciality.module';
import { LuvuluCardModule } from './modules/luvuluCard/luvuluCard.module';
import { UploadModule } from './modules/upload/upload.module';
import { PushNotificationModule } from './modules/push-notification/push-notification.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PatientModule,
    ServicesClinicModule,
    ClinicModule,
    DoctorModule,
    ConsultationTypeModule,
    WeeklyScheduleModule,
    AppointmentModule,
    NotificationModule,
    MedicalHistoryModule,
    WeeklyScheduleModule,
    DoctorRatingModule,
    ClinicRatingModule,
    QrCodeModule,
    FavoritesModule,
    MedicalReportModule,
    specialiatyModule,
    LuvuluCardModule,
    UploadModule,
    PushNotificationModule,
  ],
})
export class AppModule {}
