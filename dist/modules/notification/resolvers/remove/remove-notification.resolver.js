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
exports.RemoveNotificationResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const remove_notification_service_1 = require("../../usecases/remove/remove-notification.service");
const notification_entity_1 = require("../../entities/notification.entity");
let RemoveNotificationResolver = class RemoveNotificationResolver {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async removeNotification(id) {
        return await this.notificationRepo.remove(id);
    }
};
exports.RemoveNotificationResolver = RemoveNotificationResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => notification_entity_1.Notifications),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RemoveNotificationResolver.prototype, "removeNotification", null);
exports.RemoveNotificationResolver = RemoveNotificationResolver = __decorate([
    (0, graphql_1.Resolver)('notification'),
    __metadata("design:paramtypes", [remove_notification_service_1.RemoveNotificationService])
], RemoveNotificationResolver);
//# sourceMappingURL=remove-notification.resolver.js.map