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
exports.UpdateNotificationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const update_notification_input_1 = require("../../dtos/update-notification.input");
const update_notification_service_1 = require("../../usecases/update/update-notification.service");
const notification_entity_1 = require("../../entities/notification.entity");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let UpdateNotificationResolver = class UpdateNotificationResolver {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async updateNotification(notification) {
        return await this.notificationService.update(notification.id, notification);
    }
};
exports.UpdateNotificationResolver = UpdateNotificationResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => notification_entity_1.Notifications),
    __param(0, (0, graphql_1.Args)('notificationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_notification_input_1.UpdateNotificationInput]),
    __metadata("design:returntype", Promise)
], UpdateNotificationResolver.prototype, "updateNotification", null);
exports.UpdateNotificationResolver = UpdateNotificationResolver = __decorate([
    (0, graphql_1.Resolver)('notification'),
    __metadata("design:paramtypes", [update_notification_service_1.UpdateNotificationService])
], UpdateNotificationResolver);
//# sourceMappingURL=update-notification.resolver.js.map