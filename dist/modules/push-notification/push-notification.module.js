"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationModule = void 0;
const common_1 = require("@nestjs/common");
const send_service_1 = require("./usecases/send/send.service");
const create_resolver_1 = require("./resolvers/create/create.resolver");
const create_service_1 = require("./usecases/create/create.service");
const remove_service_1 = require("./usecases/remove/remove.service");
const priismaFCMRepository_1 = require("./repository/implementations/priismaFCMRepository");
const IFCMRepository_1 = require("./repository/interface/IFCMRepository");
const auth_module_1 = require("../auth/auth.module");
const prisma_module_1 = require("../prisma/prisma.module");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
let PushNotificationModule = class PushNotificationModule {
};
exports.PushNotificationModule = PushNotificationModule;
exports.PushNotificationModule = PushNotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            send_service_1.SendNotificationService,
            create_service_1.CreateFCMService,
            remove_service_1.RemoveFCMService,
            create_resolver_1.CreateFMCResolver,
            create_resolver_1.CreateFMCResolver,
            {
                provide: IFCMRepository_1.IFCMRepository,
                useClass: priismaFCMRepository_1.PrismaFCMRepository,
            },
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
        ],
        exports: [],
    })
], PushNotificationModule);
//# sourceMappingURL=push-notification.module.js.map