"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const patient_module_1 = require("./modules/patient/patient.module");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("./modules/user/user.module");
const nestjs_prisma_1 = require("nestjs-prisma");
const auth_module_1 = require("./modules/auth/auth.module");
const clinic_module_1 = require("./modules/clinic/clinic.module");
const servicesClinic_module_1 = require("./modules/clinicServices/servicesClinic.module");
const doctor_module_1 = require("./modules/doctor/doctor.module");
const consultationType_module_1 = require("./modules/consultationType/consultationType.module");
const Weekly_schedule_module_1 = require("./modules/weeklySchedule/Weekly-schedule.module");
const appointment_module_1 = require("./modules/appointments/appointment.module");
const notification_module_1 = require("./modules/notification/notification.module");
const medicalHistory_module_1 = require("./modules/MedicalHistory/medicalHistory.module");
const clinic_rating_module_1 = require("./modules/clinicRating/clinic-rating.module");
const doctor_rating_module_1 = require("./modules/doctorRating/doctor-rating.module");
const qr_code_module_1 = require("./modules/qr-code/qr-code.module");
const favorites_module_1 = require("./modules/favorites/favorites.module");
const config_1 = require("@nestjs/config");
const medicalReportr_module_1 = require("./modules/MedicalReport/medicalReportr.module");
const speciality_module_1 = require("./modules/doctorSpeciality/speciality.module");
const luvuluCard_module_1 = require("./modules/luvuluCard/luvuluCard.module");
const upload_module_1 = require("./modules/upload/upload.module");
const push_notification_module_1 = require("./modules/push-notification/push-notification.module");
const restApi_module_1 = require("./modules/RestApi/restApi.module");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_prisma_1.PrismaModule.forRoot({
                isGlobal: true,
                prismaServiceOptions: {
                    middlewares: [
                        (0, nestjs_prisma_1.loggingMiddleware)({
                            logger: new common_1.Logger('PrismaMiddleware'),
                            logLevel: 'log',
                        }),
                    ],
                },
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: true,
            }),
            platform_express_1.MulterModule.register({}),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            patient_module_1.PatientModule,
            servicesClinic_module_1.ServicesClinicModule,
            clinic_module_1.ClinicModule,
            doctor_module_1.DoctorModule,
            consultationType_module_1.ConsultationTypeModule,
            Weekly_schedule_module_1.WeeklyScheduleModule,
            appointment_module_1.AppointmentModule,
            notification_module_1.NotificationModule,
            medicalHistory_module_1.MedicalHistoryModule,
            Weekly_schedule_module_1.WeeklyScheduleModule,
            doctor_rating_module_1.DoctorRatingModule,
            clinic_rating_module_1.ClinicRatingModule,
            qr_code_module_1.QrCodeModule,
            favorites_module_1.FavoritesModule,
            medicalReportr_module_1.MedicalReportModule,
            speciality_module_1.specialiatyModule,
            luvuluCard_module_1.LuvuluCardModule,
            upload_module_1.UploadModule,
            push_notification_module_1.PushNotificationModule,
            restApi_module_1.RestApiModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map