"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const auth_module_1 = require("..//auth/auth.module");
const IClinicRepository_1 = require("./repository/interface/IClinicRepository");
const prismaClinicRepository_1 = require("./repository/implementations/prismaClinicRepository");
const create_clinic_service_1 = require("./usecases/create/create-clinic.service");
const listaAll_clinic_service_1 = require("./usecases/listAll/listaAll-clinic.service");
const findOne_clinic_service_1 = require("./usecases/findOne/findOne-clinic.service");
const remove_patitient_service_1 = require("./usecases/remove/remove-patitient.service");
const create_clinic_resolver_1 = require("./resolvers/create/create-clinic.resolver");
const remove_clinic_resolver_1 = require("./resolvers/remove/remove-clinic.resolver");
const findOne_clinic_resolver_1 = require("./resolvers/findOne/findOne-clinic.resolver");
const listAll_clinic_resolver_1 = require("./resolvers/listAll/listAll-clinic.resolver");
const perfil_clinic_resolver_1 = require("./resolvers/perfil/perfil-clinic.resolver");
const perfil_clinic_service_1 = require("./usecases/profile/perfil-clinic.service");
const change_appointment_status_service_1 = require("./usecases/change-appointment-status/change-appointment-status.service");
const change_appointmant_status_resolver_1 = require("./resolvers/changeAppointmantStatus/change-appointmant-status.resolver");
const prismaAppointmentRepository_1 = require("../appointments/repository/implementations/prismaAppointmentRepository");
const IAppointmentRepository_1 = require("../appointments/repository/interface/IAppointmentRepository");
const prismaNotificationRepository_1 = require("../notification/repository/implementations/prismaNotificationRepository");
const INotificaionRepository_1 = require("../notification/repository/interface/INotificaionRepository");
const find_by_clinicId_appointment_service_1 = require("./usecases/findByClinicId/find-by-clinicId-appointment.service");
const find_by_clinicId_appointment_resolver_1 = require("./resolvers/findByPatientId/find-by-clinicId-appointment.resolver");
const prismaDoctorRepository_1 = require("../doctor/repository/implementations/prismaDoctorRepository");
const IDoctorRepository_1 = require("../doctor/repository/interface/IDoctorRepository");
const emailService_1 = require("../../utils/services/emailService");
const find_clinic_nearBy_resolver_1 = require("./resolvers/findClinicNearBy/find-clinic-nearBy.resolver");
const find_clinic_nearBy_service_1 = require("./usecases/findClinicNearBy/find-clinic-nearBy.service");
const filter_clinic_resolver_1 = require("./resolvers/filter/filter-clinic.resolver");
const filter_clinic_service_1 = require("./usecases/filter/filter-clinic.service");
const search_clinic_service_1 = require("./usecases/searchClinic/search-clinic.service");
const search_clinic_resolver_1 = require("./resolvers/searchClinic/search-clinic.resolver");
const update_password_resolver_1 = require("./resolvers/change-password/update-password.resolver");
const update_clinic_resolver_1 = require("./resolvers/update/update-clinic.resolver");
const update_password_service_1 = require("./usecases/change-password/update-password.service");
const update_clinic_service_1 = require("./usecases/update/update-clinic.service");
const IPatientRepository_1 = require("../patient/repository/interface/IPatientRepository");
const prismaPatitientRepository_1 = require("../patient/repository/implementations/prismaPatitientRepository");
let ClinicModule = class ClinicModule {
};
exports.ClinicModule = ClinicModule;
exports.ClinicModule = ClinicModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_clinic_service_1.CreateClinicService,
            listaAll_clinic_service_1.ListAllClinicService,
            findOne_clinic_service_1.FindOneClinicService,
            remove_patitient_service_1.RemoveClinicService,
            perfil_clinic_service_1.ProfileClinicService,
            change_appointment_status_service_1.ClinicChangeAppointmentStatusService,
            find_by_clinicId_appointment_service_1.FindAppointmentByClinicIdService,
            emailService_1.SendMailService,
            find_clinic_nearBy_service_1.findClinicNearByService,
            filter_clinic_service_1.FilterClinicService,
            search_clinic_service_1.SearchClinicService,
            update_clinic_service_1.UpdateClinicService,
            update_password_service_1.UpdateClinicPasswordService,
            create_clinic_resolver_1.CreateClinicResolver,
            listAll_clinic_resolver_1.ListAllClinicResolver,
            findOne_clinic_resolver_1.FindOneClinicResolver,
            remove_clinic_resolver_1.RemoveClinicResolver,
            perfil_clinic_resolver_1.ProfileClinicResolver,
            change_appointmant_status_resolver_1.ClinicChangeAppointmantStatusResolver,
            find_by_clinicId_appointment_resolver_1.FindAppointmentByClinicIdResolver,
            find_clinic_nearBy_resolver_1.FindClinicNearByResolver,
            filter_clinic_resolver_1.FilterClinicResolver,
            search_clinic_resolver_1.FindSearchClinicResolver,
            update_clinic_resolver_1.UpdateClinicResolver,
            update_password_resolver_1.UpdateClinicPasswordResolver,
            {
                provide: IClinicRepository_1.IClinicRepository,
                useClass: prismaClinicRepository_1.PrismaClinicRepositoy,
            },
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
            {
                provide: INotificaionRepository_1.INotificationRepository,
                useClass: prismaNotificationRepository_1.PrismaNotificationsRepositoy,
            },
            {
                provide: IAppointmentRepository_1.IAppointmentRepository,
                useClass: prismaAppointmentRepository_1.PrismaAppointmentRepositoy,
            },
            {
                provide: IDoctorRepository_1.IDoctorRepository,
                useClass: prismaDoctorRepository_1.PrismaDoctorRepositoy,
            },
            {
                provide: IPatientRepository_1.IPatientRepository,
                useClass: prismaPatitientRepository_1.PrismaPatitientRepositoy,
            },
        ],
        exports: [],
    })
], ClinicModule);
//# sourceMappingURL=clinic.module.js.map