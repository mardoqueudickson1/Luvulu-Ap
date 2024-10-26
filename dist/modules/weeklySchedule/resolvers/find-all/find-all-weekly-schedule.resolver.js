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
exports.FindAllWeeklyScheduleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Weekly_schedule_entity_1 = require("../../entities/Weekly-schedule-entity");
const find_all_weekly_schedule_service_1 = require("../../usecases/find-all/find-all-weekly-schedule.service");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let FindAllWeeklyScheduleResolver = class FindAllWeeklyScheduleResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async findAllWeeklySchedule() {
        return this.repo.findAll();
    }
};
exports.FindAllWeeklyScheduleResolver = FindAllWeeklyScheduleResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [Weekly_schedule_entity_1.WeeklySchedules]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FindAllWeeklyScheduleResolver.prototype, "findAllWeeklySchedule", null);
exports.FindAllWeeklyScheduleResolver = FindAllWeeklyScheduleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [find_all_weekly_schedule_service_1.FindAllWeeklyScheduleService])
], FindAllWeeklyScheduleResolver);
//# sourceMappingURL=find-all-weekly-schedule.resolver.js.map