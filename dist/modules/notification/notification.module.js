"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const auth_module_1 = require("../auth/auth.module");
const findOne_notification_service_1 = require("./usecases/findOne/findOne-notification.service");
const remove_notification_service_1 = require("./usecases/remove/remove-notification.service");
const INotificaionRepository_1 = require("./repository/interface/INotificaionRepository");
const prismaNotificationRepository_1 = require("./repository/implementations/prismaNotificationRepository");
const findOne_notification_resolver_1 = require("./resolvers/findOne/findOne-notification.resolver");
const remove_notification_resolver_1 = require("./resolvers/remove/remove-notification.resolver");
const update_notification_service_1 = require("./usecases/update/update-notification.service");
const update_notification_resolver_1 = require("./resolvers/update/update-notification.resolver");
const listAll_notification_patientId_resolver_1 = require("./resolvers/listAllByPatientId/listAll-notification-patientId.resolver");
const getAll_notification_patientId_service_1 = require("./usecases/getAllNotificationBypatientId/getAll-notification-patientId.service");
const listAll_notification_clinicId_resolver_1 = require("./resolvers/listAllByClinicId/listAll-notification-clinicId.resolver");
const getAll_notification_clinicId_service_1 = require("./usecases/getAllNotificationByClinicId/getAll-notification-clinicId.service");
const listAll_notification_doctorId_resolver_1 = require("./resolvers/listAllByDoctorId/listAll-notification-doctorId.resolver");
const getAll_notification_doctorId_service_1 = require("./usecases/getAllNotificationBydoctorId/getAll-notification-doctorId.service");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            getAll_notification_patientId_service_1.ListAllNotificationByPatientService,
            findOne_notification_service_1.FindOneNotificationService,
            remove_notification_service_1.RemoveNotificationService,
            update_notification_service_1.UpdateNotificationService,
            getAll_notification_clinicId_service_1.ListAllNotificationByClinicIdService,
            getAll_notification_doctorId_service_1.ListAllNotificationByDoctorIdService,
            listAll_notification_patientId_resolver_1.ListAllNotificationPatientResolver,
            findOne_notification_resolver_1.FindOneNotificationResolver,
            remove_notification_resolver_1.RemoveNotificationResolver,
            findOne_notification_resolver_1.FindOneNotificationResolver,
            update_notification_resolver_1.UpdateNotificationResolver,
            listAll_notification_clinicId_resolver_1.ListAllNotificationClinicIdResolver,
            listAll_notification_doctorId_resolver_1.ListAllNotificationDoctorIdResolver,
            {
                provide: INotificaionRepository_1.INotificationRepository,
                useClass: prismaNotificationRepository_1.PrismaNotificationsRepositoy,
            },
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
        ],
        exports: [],
    })
], NotificationModule);
//# sourceMappingURL=notification.module.js.map