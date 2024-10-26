"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const prismaPatitientRepository_1 = require("./repository/implementations/prismaPatitientRepository");
const IPatientRepository_1 = require("./repository/interface/IPatientRepository");
const create_patient_resolver_1 = require("./resolvers/create/create-patient.resolver");
const create_patient_service_1 = require("./usecases/create/create-patient.service");
const findOne_patient_resolver_1 = require("./resolvers/findOne/findOne-patient.resolver");
const listAll_patient_resolver_1 = require("./resolvers/listAll/listAll-patient.resolver");
const remove_patient_resolver_1 = require("./resolvers/remove/remove-patient.resolver");
const findOne_patitient_service_1 = require("./usecases/findOne/findOne-patitient.service");
const listaAll_patitient_service_1 = require("./usecases/listAll/listaAll-patitient.service");
const remove_patitient_service_1 = require("./usecases/remove/remove-patitient.service");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const auth_module_1 = require("../auth/auth.module");
const perfil_patient_resolver_1 = require("./resolvers/perfil/perfil-patient.resolver");
const perfil_patitient_service_1 = require("./usecases/perfil/perfil-patitient.service");
const emailService_1 = require("../../utils/services/emailService");
const pacient_cancel_appointment_resolver_1 = require("./resolvers/pacient-cancel-appointment/pacient-cancel-appointment.resolver");
const pacient_cancel_appointment_service_1 = require("./usecases/pacient-cancel-appointment/pacient-cancel-appointment.service");
const prismaAppointmentRepository_1 = require("../appointments/repository/implementations/prismaAppointmentRepository");
const IAppointmentRepository_1 = require("../appointments/repository/interface/IAppointmentRepository");
const prismaNotificationRepository_1 = require("../notification/repository/implementations/prismaNotificationRepository");
const INotificaionRepository_1 = require("../notification/repository/interface/INotificaionRepository");
const prisma_QRCodeRepository_1 = require("../qr-code/repository/implementations/prisma-QRCodeRepository");
const IQRCodeRepository_1 = require("../qr-code/repository/interface/IQRCodeRepository");
const update_password_service_1 = require("./usecases/change-password/update-password.service");
const update_password_resolver_1 = require("./resolvers/change-password/update-password.resolver");
const update_patient_resolver_1 = require("./resolvers/update/update-patient.resolver");
const update_patient_service_1 = require("./usecases/update/update-patient.service");
const update_patient_avatar_service_1 = require("./usecases/updateAvatar/update-patient-avatar.service");
const superBase_provider_1 = require("../../utils/shared/providers/storageProviders/implementations/supaBase/superBase-provider");
const platform_express_1 = require("@nestjs/platform-express");
const IstorageProvider_1 = require("../../utils/shared/providers/storageProviders/interfaces/IstorageProvider");
let PatientModule = class PatientModule {
};
exports.PatientModule = PatientModule;
exports.PatientModule = PatientModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, platform_express_1.MulterModule],
        providers: [
            listaAll_patitient_service_1.ListAllPatientService,
            findOne_patitient_service_1.FindOnePatientService,
            remove_patitient_service_1.RemovePatientService,
            create_patient_service_1.CreatePatientService,
            perfil_patitient_service_1.ProfilePatientService,
            emailService_1.SendMailService,
            pacient_cancel_appointment_service_1.PatientCancelAppointmentService,
            update_password_service_1.UpdatePasswordService,
            update_patient_service_1.UpdatePatientService,
            update_patient_avatar_service_1.UpdatePatientAvatarService,
            listAll_patient_resolver_1.ListAllPatientResolver,
            perfil_patient_resolver_1.ProfilePatientResolver,
            create_patient_resolver_1.CreatePatientResolver,
            findOne_patient_resolver_1.FindOnePatientResolver,
            remove_patient_resolver_1.RemovePatientResolver,
            pacient_cancel_appointment_resolver_1.PatientCancelAppointmentResolver,
            update_password_resolver_1.UpdatePasswordResolver,
            update_patient_resolver_1.UpdatePatientResolver,
            {
                provide: IPatientRepository_1.IPatientRepository,
                useClass: prismaPatitientRepository_1.PrismaPatitientRepositoy,
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
                provide: IQRCodeRepository_1.IQRCodeRepository,
                useClass: prisma_QRCodeRepository_1.PrismaQRCodeRepository,
            },
            {
                provide: IstorageProvider_1.IStorageProvider,
                useClass: superBase_provider_1.SuperBaseProviderRepository,
            },
        ],
        exports: [],
    })
], PatientModule);
//# sourceMappingURL=patient.module.js.map