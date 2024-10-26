"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllNotificationResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const listaAll_notification_service_1 = require("../../usecases/listAll/listaAll-notification.service");
const notificationResponse_1 = require("../../dtos/notificationResponse");
let ListAllNotificationResolver = class ListAllNotificationResolver {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async findAllNotification() {
        return await this.notificationRepo.listAll();
    }
};
exports.ListAllNotificationResolver = ListAllNotificationResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [notificationResponse_1.NotificationResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListAllNotificationResolver.prototype, "findAllNotification", null);
exports.ListAllNotificationResolver = ListAllNotificationResolver = __decorate([
    (0, graphql_1.Resolver)(() => notificationResponse_1.NotificationResponse),
    __metadata("design:paramtypes", [listaAll_notification_service_1.ListAllNotificationService])
], ListAllNotificationResolver);
//# sourceMappingURL=listAll-notification.resolver.js.map