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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllNotificationClinicIdResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const notificationResponse_1 = require("../../dtos/notificationResponse");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const getAll_notification_clinicId_service_1 = require("../../usecases/getAllNotificationByClinicId/getAll-notification-clinicId.service");
let ListAllNotificationClinicIdResolver = class ListAllNotificationClinicIdResolver {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async findAllNotificationClinicId(user) {
        return await this.notificationRepo.listAll(user.id);
    }
};
exports.ListAllNotificationClinicIdResolver = ListAllNotificationClinicIdResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [notificationResponse_1.NotificationResponse]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListAllNotificationClinicIdResolver.prototype, "findAllNotificationClinicId", null);
exports.ListAllNotificationClinicIdResolver = ListAllNotificationClinicIdResolver = __decorate([
    (0, graphql_1.Resolver)(() => notificationResponse_1.NotificationResponse),
    __metadata("design:paramtypes", [getAll_notification_clinicId_service_1.ListAllNotificationByClinicIdService])
], ListAllNotificationClinicIdResolver);
//# sourceMappingURL=listAll-notification-clinicId.resolver.js.map