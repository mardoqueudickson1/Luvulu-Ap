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
exports.RemoveWeeklyScheduleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const remove_weekly_schedule_service_1 = require("../../usecases/remove/remove-weekly-schedule.service");
const Weekly_schedule_output_1 = require("../../dtos/Weekly-schedule-output");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let RemoveWeeklyScheduleResolver = class RemoveWeeklyScheduleResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async removeWorkCalendar(id) {
        return await this.repo.remove(id);
    }
};
exports.RemoveWeeklyScheduleResolver = RemoveWeeklyScheduleResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => Weekly_schedule_output_1.WeeklyScheduleOutput),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RemoveWeeklyScheduleResolver.prototype, "removeWorkCalendar", null);
exports.RemoveWeeklyScheduleResolver = RemoveWeeklyScheduleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [remove_weekly_schedule_service_1.RemoveWeeklyScheduleService])
], RemoveWeeklyScheduleResolver);
//# sourceMappingURL=remove-weekly-schedule.resolver.js.map