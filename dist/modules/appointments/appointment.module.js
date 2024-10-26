"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const IAppointmentRepository_1 = require("./repository/interface/IAppointmentRepository");
const prismaAppointmentRepository_1 = require("./repository/implementations/prismaAppointmentRepository");
const create_appointment_resolver_1 = require("./resolvers/create/create-appointment.resolver");
const findOne_appointment_resolver_1 = require("./resolvers/findOne/findOne-appointment.resolver");
const remove_appointment_resolver_1 = require("./resolvers/remove/remove-appointment.resolver");
const listAll_appointment_resolver_1 = require("./resolvers/listAll/listAll-appointment.resolver");
const update_appointment_resolver_1 = require("./resolvers/update/update-appointment.resolver");
const create_appointment_service_1 = require("./usecases/create/create-appointment.service");
const listaAll_appointment_service_1 = require("./usecases/listAll/listaAll-appointment.service");
const findOne_appointment_service_1 = require("./usecases/findOne/findOne-appointment.service");
const remove_appointment_service_1 = require("./usecases/remove/remove-appointment.service");
const update_appointment_service_1 = require("./usecases/update/update-appointment.service");
const prisma_WorkCalendarRepository_1 = require("../weeklySchedule/repository/implementations/prisma-WorkCalendarRepository");
const IWeeklyScheduleRepository_1 = require("../weeklySchedule/repository/interface/IWeeklyScheduleRepository");
const prismaNotificationRepository_1 = require("../notification/repository/implementations/prismaNotificationRepository");
const INotificaionRepository_1 = require("../notification/repository/interface/INotificaionRepository");
const IMedicalHistoryRepository_1 = require("../MedicalHistory/repository/interface/IMedicalHistoryRepository");
const prismaMedicalHistoryRepository_1 = require("../MedicalHistory/repository/implementations/prismaMedicalHistoryRepository");
const finByDate_appointment_service_1 = require("./usecases/findByDate/finByDate-appointment.service");
const findByDate_appointment_resolver_1 = require("./resolvers/findByDate/findByDate-appointment.resolver");
const find_by_patientId_appointment_service_1 = require("./usecases/findByPatientId/find-by-patientId-appointment.service");
const find_by_patientId_appointment_resolver_1 = require("./resolvers/findByPatientId/find-by-patientId-appointment.resolver");
const prismaClinicRepository_1 = require("../clinic/repository/implementations/prismaClinicRepository");
const IClinicRepository_1 = require("../clinic/repository/interface/IClinicRepository");
const find_by_clinicId_appointment_resolver_1 = require("./resolvers/findByClinicId/find-by-clinicId-appointment.resolver");
const find_by_DoctorId_appointment_resolver_1 = require("./resolvers/findByDoctorId/find-by-DoctorId-appointment.resolver");
const find_by_clinicId_appointment_service_1 = require("./usecases/findByClinicId/find-by-clinicId-appointment.service");
const find_by_doctorId_appointment_service_1 = require("./usecases/findByDoctortId/find-by-doctorId-appointment.service");
const prismaPatitientRepository_1 = require("../patient/repository/implementations/prismaPatitientRepository");
const IPatientRepository_1 = require("../patient/repository/interface/IPatientRepository");
let AppointmentModule = class AppointmentModule {
};
exports.AppointmentModule = AppointmentModule;
exports.AppointmentModule = AppointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            create_appointment_service_1.CreateAppointmentService,
            listaAll_appointment_service_1.ListAllAppointmentService,
            findOne_appointment_service_1.FindOneAppointmentService,
            remove_appointment_service_1.RemoveAppointmentService,
            update_appointment_service_1.UpdateAppointmentService,
            finByDate_appointment_service_1.FindAppointmentByDateService,
            find_by_patientId_appointment_service_1.FindAppointmentByPatientIdService,
            find_by_clinicId_appointment_service_1.FindAppointmentByclinicIdService,
            find_by_doctorId_appointment_service_1.FindAppointmentBydoctorIdService,
            create_appointment_resolver_1.CreateAppointmentResolver,
            findOne_appointment_resolver_1.FindOneAppointmentResolver,
            remove_appointment_resolver_1.RemoveAppointmentResolver,
            listAll_appointment_resolver_1.ListAllAppointmentsResolver,
            update_appointment_resolver_1.UpdateAppointmentResolver,
            findByDate_appointment_resolver_1.FindAppointmentByDateResolver,
            find_by_patientId_appointment_resolver_1.FindAppointmentByPatientIdResolver,
            find_by_DoctorId_appointment_resolver_1.FindAppointmentByDoctorIdResolver,
            find_by_clinicId_appointment_resolver_1.FindAppointmentByClinicIdResolver,
            {
                provide: IAppointmentRepository_1.IAppointmentRepository,
                useClass: prismaAppointmentRepository_1.PrismaAppointmentRepositoy,
            },
            {
                provide: IWeeklyScheduleRepository_1.IWeeklyScheduleRepository,
                useClass: prisma_WorkCalendarRepository_1.PrismaWeeklyScheduleRepository,
            },
            {
                provide: INotificaionRepository_1.INotificationRepository,
                useClass: prismaNotificationRepository_1.PrismaNotificationsRepositoy,
            },
            {
                provide: IMedicalHistoryRepository_1.IMedicalHistoryRepository,
                useClass: prismaMedicalHistoryRepository_1.PrismaMedicalHistoryRepositoy,
            },
            {
                provide: IClinicRepository_1.IClinicRepository,
                useClass: prismaClinicRepository_1.PrismaClinicRepositoy,
            },
            {
                provide: IPatientRepository_1.IPatientRepository,
                useClass: prismaPatitientRepository_1.PrismaPatitientRepositoy,
            },
        ],
        exports: [],
    })
], AppointmentModule);
//# sourceMappingURL=appointment.module.js.map